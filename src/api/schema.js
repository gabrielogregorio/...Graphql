const resolvers = require('./resolvers')
const { makeExecutableSchema} = require('graphql-tools')
const userAttribs = `
    id: ID
    name: String!
    email: String!
    password: String!
`
// Exclamações para consultas não deverá influênciar

const typeDefs = `
    type User {
        ${userAttribs}
    }

    type Query {
        getUser(id: ID!): User
        getUsers: [User]
    }

    input UserInput {
        ${userAttribs}
    }

    type Mutation {
        createUser(input: UserInput): User
    }
`

// ID! é obrigatório
// input será uma mutation 


module.exports = makeExecutableSchema({
    typeDefs,
    resolvers
})
