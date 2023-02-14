```bash
# Dependências
> npm i express morgan mongodb dotenv-safe express-async-errors 
> npm i -D supertest jest jest --init

# Subir o mongodb, executar na raiz da instalação do mongo (C:\Program Files\MongoDB\Server\6.0\bin) ou configurar na variável de ambiente!
mongod --dbpath E:/GIT/Node_JS/Node_Explorer/cinema-microservices/cinema-catalog-service/data --port 27018


# Abrir o DB
> mongosh

# Escolher ou criar base
> use movie-service

# Subir o mongodb, executar na raiz da instalação do mongo (C:\Program Files\MongoDB\Server\6.0\bin) ou configurar na variável de ambiente!
mongod --dbpath E:/GIT/Node_JS/Node_Explorer/cinema-microservices/cinema-catalog-service/data --port 27018

# Insert

db.cinemaCatalog.insert([
{
    cidade: "Gravataí",
    uf: "RS",
    cinemas: []
},
{
    cidade: "Porto Alegre",
    uf: "RS",
    pais: "BR",
    cinemas: [
       {
          _id: ObjectId(),
          nome: "Cinemark Bourbon Ipiranga",
          salas: [
             {
                nome: 'Sala 1',
                sessoes: [
{
                      data: ISODate("2021-02-10T09:00:00Z"),
                      idFilme: ObjectId("63e2e6cdfe51c522b57e15e4"),
                      filme: "Vingadores: Guerra Infinita",
                      valor: 25.00,
                      assentos: [
                         { numero: 1, disponivel: true },
                         { numero: 2, disponivel: false },
                      ]
                   },
                   {
                      data: ISODate("2021-02-10T11:00:00Z"),
                      idFilme: ObjectId("63e2e6cdfe51c522b57e15e4"),
                      filme: "Vingadores: Guerra Infinita",
                      valor: 25.00,
                      assentos: [
                         { numero: 1, disponivel: true },
                         { numero: 2, disponivel: true },
                      ]
                   },
                   {
                    data: ISODate("2021-02-10T13:00:00Z"),
                    idFilme: ObjectId("63e2e6cdfe51c522b57e15e6"),
                    filme: "Vingadores: Era de Ultron",
                    valor: 20.00,
                    assentos: [
                       { numero: 1, disponivel: true },
                       { numero: 2, disponivel: false },
                       { numero: 2, disponivel: true },
                    ]
}
                ]
             },
             {
                nome: 'Sala 2',
                sessoes: [
                   {
                      data: ISODate("2021-02-10T09:00:00Z"),
                      idFilme: ObjectId("63e2e6cdfe51c522b57e15e6"),
                      filme: "Vingadores: Era de Ultron",
                      valor: 25.00,
                      assentos: [
                         { numero: 1, disponivel: true },
                         { numero: 2, disponivel: false },
                      ]
                   },
                   {
                      data: ISODate("2021-02-10T11:00:00Z"),
                      idFilme: ObjectId("63e2e6cdfe51c522b57e15e6"),
                      filme: "Vingadores: Era de Ultron",
                      valor: 25.00,
                      assentos: [
                         { numero: 1, disponivel: true },
                         { numero: 2, disponivel: true },
                      ]
                   },
                   {
                    data: ISODate("2021-02-10T13:00:00Z"),
                    idFilme: ObjectId("63e2e6cdfe51c522b57e15e6"),
                    filme: "Vingadores: Era de Ultron",
valor: 20.00,
                    assentos: [
                       { numero: 1, disponivel: true },
                       { numero: 2, disponivel: false },
                       { numero: 2, disponivel: true },
                    ]
                 }
                ]
             }
          ]
       },
       {
        _id: ObjectId(),
        nome: "GNC Lindóia",
        salas: [
           {
              nome: 'Sala 100',
              sessoes: [
                 {
                    data: ISODate("2021-02-10T09:00:00Z"),
                    idFilme: ObjectId("5aefc5029ce83b1eb6b89e59"),
                    filme: "Os Vingadores",
                    valor: 25.00,
                    assentos: [
                       { numero: 1, disponivel: true },
                       { numero: 2, disponivel: false },
                    ]
                 },
                 {
                    data: ISODate("2021-02-10T11:00:00Z"),

idFilme: ObjectId("5aefc5029ce83b1eb6b89e59"),
                    filme: "Os Vingadores",
                    valor: 25.00,
                    assentos: [
                       { numero: 1, disponivel: true },
                       { numero: 2, disponivel: true },
                    ]
                 },
                 {
                  data: ISODate("2021-02-10T13:00:00Z"),
                  idFilme: ObjectId("63e2e6cdfe51c522b57e15e6"),
                  filme: "Vingadores: Era de Ultron",
                  valor: 20.00,
                  assentos: [
                     { numero: 1, disponivel: true },
                     { numero: 2, disponivel: false },
                     { numero: 2, disponivel: true },
                  ]
               }
              ]
           }
        ]
     }
    ]
}])

```