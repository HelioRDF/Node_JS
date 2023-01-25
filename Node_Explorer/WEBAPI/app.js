const db = require('./db');
const express = require('express');
const app = express();
const port = 3000; //porta padrão
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//definindo as rotas
const router = express.Router();
router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));
app.use('/', router);



router.get('/clientes/:id?', async function (req, res) {
    try {
        if (req.params.id)
            res.json(await db.findCustomer(req.params.id));
        else
            res.json(await db.findCustomers());
    } catch (ex) { console.log(ex); res.status(500).json({ erro: `${ex}` }); }
});

// POST
router.post('/clientes', async function (req, res, next) {
    try {
        const customer = req.body
        await db.insertCustomer(customer);
        res.json({ message: "cliente cadastrado com sucesso: ", customer });
    } catch (ex) { console.log(ex); res.status(500).json({ erro: `${ex}` }); }
})

//inicia o servidor
app.listen(port);
console.log('API funcionando!');
