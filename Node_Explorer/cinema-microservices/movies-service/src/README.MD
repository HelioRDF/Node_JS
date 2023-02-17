

#Exemplo página 259
```bash
> npm i express mongodb dotenv-safe morgan express-async-errors 

> npm i -D jest supertest jest --init
```
# "start" : "node ./src/index " , 
#  "test" : "jest"

# https://www.luiztools.com.br/post/tutorial-mongodb-para-iniciantes-em-nosql/
# https://www.mongodb.com/products/shell


# Para usar o mongo via terminal baixar o mongodb shell, extrair o bin e jogar o arquivo na pasta bin da instalação do mongodb

# Abrir o DB
> mongosh

# Escolher ou criar base
> use movie-service

# Subir o mongodb, executar na raiz da instalação do mongo (C:\Program Files\MongoDB\Server\6.0\bin) ou configurar na variável de ambiente!
mongod --dbpath E:/GIT/Node_JS/Node_Explorer/cinema-microservices/movies-service/data --port 27017

# Insert
> db.movies.insert([{ titulo: "Os Vingadores: Ultimato", sinopse: "Os heróis mais poderosos da Terra enfrentando o Thanos. De novo.", duracao: 181, dataLancamento: ISODate("2019-04-25T00:00:00Z"), imagem: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UX182_CR0,0,182,268_AL_.jpg", categorias: ["Aventura", "Ação"] },{ titulo: "Os Vingadores: Guerra Infinita", sinopse: "Os heróis mais poderosos da Terra enfrentando o Thanos",
duracao: 149, dataLancamento: ISODate("2018-04-26T00:00:00Z"), imagem: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_UX182_CR0,0,182,268_AL_.jpg", categorias: ["Aventura", "Ação"] },{ titulo: "Os Vingadores: Era de Ultron", sinopse: "Os heróis mais poderosos da Terra enfrentando o Ultron", duracao: 141, dataLancamento: ISODate("2015-04-23T00:00:00Z"), imagem: "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_UX182_CR0,0,182,268_AL_.jpg", categorias: ["Aventura", "Ação"] },{ titulo: "Os Vingadores", sinopse: "Os heróis mais poderosos da Terra enfrentando o Loki", duracao: 143, dataLancamento: ISODate("2012-04-27T00:00:00Z"), imagem: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg", categorias: ["Aventura", "Ação"] }])

