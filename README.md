# GraphQL
API com GraphQl integrada ao mysql Workbench.  
Recomendado usar uma distribuição Linux ou o Ubuntu para Windows.


## Como implementar a API
1. Crie o arquivo .env dentro da pasta "src" com o seguinte texto:
```
module.exports = {
    password: 'senha do banco de dados mysql'
}
```

2. Configure o arquivo "knexfile.js" com os dados de acesso do seu banco de dados.
3. Crie um schema no WorkBench chamado "graphql"
4. Instale as dependências com o comando 
```shell
sudo npm i
```
5. Instale o knex de forma glboal com o comando 
```shell
npm i -g knex
```
6. Dentro da pasta src, execute o seguinte comando para iniciar a migration
```shell
knex migrate:latest
```
7. Inicie o servidor com o comando
```shell
node server.js
```
8. Acesse o endereço http://localhost:4000/api para explorar a API

--------------

**Como fazer consultas**
```
query {
  getUsers {
    id
    name
    email
    password
  }
  
  getUser(id:1) {
    id
    name
  }
}
```

**Como inserir dados com as mutations**
```
mutation {
  createUser(input: {
    name:"mirena"
    email: "mi@rena.com"
    password: "2432"
  })
  
  {
    id
    name
  }
}
```


-----------

Anotações que você não precisa saber.

Criar uma migration    
knex migrate:make create_table_users   