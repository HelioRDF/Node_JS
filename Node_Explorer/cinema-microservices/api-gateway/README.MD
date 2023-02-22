```bash
> npm init


# express: nosso pacote para criar web APIs e web apps facilmente;
# morgan: o logger que usaremos para saber o que está acontecendo com nosso API Gateway no terminal;
# express-http-proxy: pacote para redirecionar requisições para os microservices;
> npm i express morgan express-http-proxy
 


# redis no windows - https://learn.microsoft.com/en-us/windows/wsl/install
# https://redis.io/docs/getting-started/installation/install-redis-on-windows/
# PowerShell
 wsl --install


curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg

echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list

sudo apt-get update
sudo apt-get install redis

sudo service redis-server start

#Testar
redis-cli 
127.0.0.1:6379> ping
PONG

#subir com config padrão
./src/redis-server

#Acessar a CLI
./src/redis-cli

#Adicionar chaves
SET /movies http://localhost:3000/ 
SET /cities http://localhost:3001/ 
SET /cinemas http://localhost:3001/


# Instalar dependência no projeto
npm i redis

# bcrypt
https://bcrypt-generator.com/

> npm i bcryptjs

# Dependências
# jsonwebtoken: pacote que implementa o protocolo JSON Web Token;
# dotenv-safe: pacote para gerenciar facilmente variáveis de ambiente;
> npm i jsonwebtoken dotenv-safe

```
