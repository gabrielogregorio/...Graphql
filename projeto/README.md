> npm i @babel/core @babel/cli @babel/preset-env @babel/node -D

+ .babelrc
```
{
  "presets": ["@babel/preset-env"]
}
```

+ scritps inside package.json
```
//para es6
// Reconhecer mudanças em arquivos gql
npx nodemon --exec babel-node src/index.js -e js.gql
```

## Criar
```
mutation {
  createUser(data: {
    firstName: "gabriel",
    lastName:"Gregório",
    email:"gabs@gabs.com",
    active:true
  }) {
    email
  }
}
```

# Consultar dados
```
{
  users {
    lastName,
    email,
    _id
  }
}
```

# Obter um usuário
```
{
  user(id: "6147ac3c5677c15c773ff01b") {
    firstName
  }
}
```
# Delete
```
mutation {
  deleteUser(id:"6147ac3c5677c15c773ff01b")
}
```

## Update
```
mutation {
  updateUser(id:"6147ac3c5677c15c773ff01b", data: {
    firstName: "joana",
    lastName:"Lucilan",
		email:"aa.@aa.com",
    active:false
  }) {
    email
  }
}
```

# Criar post
```
mutation {
  createPost(data:{
    title:"meu post"
    content:"meu content"
    author:"6147ac3c5677c15c773ff01b"
  }) {
    title
  }
}
```

# Consulta com populate
```
{
  posts{
    title
    author {
      email
    }
  }
}
```