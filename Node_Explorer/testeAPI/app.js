const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const port = 3000; //porta padrão

//Aqui estamos configurando o express para usar o body-parser como middle-ware.
app.use(bodyParser.urlencoded({ extendido: false }));
app.use(bodyParser.json());

//definindo as rotas
const router = express.Router();
router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));
app.use('/', router);


// POST
app.post('/clientes',  function (req, res) {
 
        const nome = req.body.nome
        const idade = parseInt(req.body.idade);
        const uf = req.body.uf
        console.log(req.body)
       
        res.json({ message: "cliente cadastrado com sucesso" });

})
//curl -X POST -d "{'nome':'Curl', 'idade': 11, 'uf': 'RJ'}" http://localhost:3000/clientes


//inicia o servidor
app.listen(port);
console.log('API funcionando!');
