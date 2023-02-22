//index.js
require("dotenv-safe").config();
const redis = require('./redisClient');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const httpProxy = require('express-http-proxy');


const express = require('express');
const app = express();

const logger = require('morgan');
app.use(logger('dev'));


app.post('/login', express.json(), async (req, res, next) => {
    const req_username = await req.body.username;
    const req_password = await req.body.password;

    const valuePass = await redis.getValue('password');
    const valueUser = await redis.getValue('username');
    const isValidPass = bcrypt.compareSync(req_password, valuePass);
    const isValidUser = req_username === valueUser;
    console.log(isValidUser);

    if (isValidPass && isValidUser ) {
        const expiresIn = parseInt(process.env.EXPIRES);
        const token = jwt.sign({ username: req_username },
            process.env.SECRET, { expiresIn });
        res.json({ token });
    }
    else{
        res.sendStatus(401);
    
    }


})

async function selectProxyHost(req) {
    let uri = req.url;
    uri= uri.split("/");
    let myproxy= await redis.getValue("/"+uri[1]);
    return myproxy;
}

function verifyJWT(req, res, next) {
    let token = req.headers['authorization'];
    if (!token) return res.sendStatus(401);
    console.log(token);
    token = token.replace('Bearer ', '');

    try {
        const decoded = jwt.verify(token, process.env.SECRET);
        console.log(decoded);
        res.locals.username = decoded.username;
        next();
    } catch (error) {
        console.log(error);
        res.sendStatus(401);
    }
}

app.use(verifyJWT);

app.use(async (req, res, next) => {
    httpProxy(await selectProxyHost(req))(req, res, next);
});

app.listen(10000, () => {
    console.log('API Gateway running!');
});

//----------------------------------------------------------------------------------------------
// Modo simples
/*
function selectProxyHost(req) {
    if (req.path.startsWith('/movies'))
        return 'http://localhost:3000/';
    else if (req.path.startsWith('/cinemas') || req.path.startsWith('/cities'))
        return 'http://localhost:3001/';
}

app.use((req, res, next) => {
    httpProxy(selectProxyHost(req))(req, res, next);
});
*/
//----------------------------------------------------------------------------------------------
