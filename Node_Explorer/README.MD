# Node Explorer

##  Comandos
```bash
#Executar arquivo NODE
> node .\index.js
```

## Frameworks

```bash
#Express.js é um framework para Node.js que fornece recursos mínimos para construção de servidores web. Foi lançado como software livre e de código aberto sob a Licença MIT. É um dos mais populares frameworks para servidores em Node.js
> npm install -g express-generator

#Criar o projeto com express
#Usando -e, nossa aplicação será configurada com a view-engine EJS (Embedded JavaScript) que permite misturar HTML com JavaScript server-side para criar os layouts.
#Nota: a view-engine padrão do Express (sem a opção -e) é a Pug (antiga Jade). Ela não é ruim, muito pelo contrário, mas como não usa a linguagem HTML padrão optei por usar a EJS. Existem outras alternativas no mercado, como HandleBars (hbs),
> express -e --git NODE_EXPLORER_WEB

#Executar no power shell caso de erro
> Set-ExecutionPolicy RemoteSigned

#Instalar as dependências no projeto
> npm install

#Executar o servidor web (http://localhost:3000/)
> npm start

#Instalar MongoDB
> npm install mongodb

#Abra o arquivo www que fica na pasta bin do seu projeto Node.js e adicione a seguinte linha no início dele:
> global.db = require('../db')

#  Usar variável de Ambiente 
- npm i dotenv-safe axios

# Capturar Variável de ambiente
process.env.Java_Home

#MongoDB
> mongod --dbpath E:/GIT/Node_JS/Node_Explorer/cinema-microservices/movies-service/data

```
