const { ApolloServer, gql } = require('apollo-server');
// Todas as requests são POST
// Todas as requests batem no mesmo endpoint /graphql

// Query => get
// mutation => post/pust/patch/delete

// Scalar Types -> Tipos primitivos -> String, Int, Boolean, Float e ID
// ! indica obrigatoriedade
// ID => Pode ser numero, qualquer coisa

/*
query {
  posts {
    title
    author  {
      name
      email
    }
  }
}
 */

// users: [User]! => Pode array vazio, mas não null
// users: [User!]! => ++ Não pode array de null
const typeDefs = gql`
  type User {
    _id: ID!
    name: String!
    email: String!
    active: Boolean
  }

  type Post {
    _id: ID
    title: String!
    content: String!
    author: User!
  }

  type Query {
    hello: String
    users: [User!]!
    getUserByEmail(email: String!): User!
  }

  type Mutation {
    createUser(name: String!, email: String): User!
  }
`

/*
query {
  getUserByEmail(email: "gabs@gabs.com2") {
    name
    email
  }
}
*/


let listUsers = [
  {_id: String(Math.random()), name: 'gabs', email: 'gabs@gabs.com', active: true},
  {_id: String(Math.random()), name: 'gabs1', email: 'gabs@gabs.com1', active: true},
  {_id: String(Math.random()), name: 'gabs2', email: 'gabs@gabs.com2', active: false},
]

const resolvers = {
  Query: {
    hello: () => 'Hello Worlds',
    users: () => listUsers,
    getUserByEmail: (_, args) => {
      return listUsers.find((user) => user.email === args.email)
    }
  },
  /*
  mutation {
 	createUser(name: "lucas", email:"lu@lu.com") {
    name,
    _id
  }
}
   */
  Mutation: {
    createUser: (_, args) => {
      const newUser = {
        _id: String(Math.random()),
        name: args.name,
        email: args.email,
        active: true
      }
      listUsers.push(newUser)
      return newUser
    }
  }
};



const server = new ApolloServer({typeDefs, resolvers});
server.listen().then(({url}) => console.log(url))