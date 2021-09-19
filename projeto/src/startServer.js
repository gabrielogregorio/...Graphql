import { ApolloServer } from 'apollo-server'
import mongoose from 'mongoose'

function startServer({typeDefs, resolvers}) {
  mongoose.connect('mongodb://localhost:27017/testGraphql', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  const server = new ApolloServer({typeDefs, resolvers})
  server.listen().then(({url}) => console.log(`Running in ${url}`) ) 
}

export default startServer