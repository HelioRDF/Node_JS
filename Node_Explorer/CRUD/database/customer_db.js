require('dotenv').config();
conn_db = require('./db');


//Buscar tudo!
function findAll(callback){  
    console.log("CHAMOU FINDALL")
 let myconn=conn_db.connectar();
    myconn.collection("customer").find({}).toArray(callback);
}

module.exports = { findAll }
