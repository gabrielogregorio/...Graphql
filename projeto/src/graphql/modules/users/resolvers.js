import User from '../../../models/User'


export default {
  User: {
    fullName:(user) => `${user.firstName} ${user.lastName}`
  },
  Query: {
    users: async () => {return await User.find()},
    user: async (_, { id }) => {return await User.findById(id)},    
  },
  Mutation: {
    createUser: (_, { data }) => User.create(data),
    updateUser: async (_, { id, data }) => { return await User.findOneAndUpdate(id, data, {new: true}) }, // faz o update e retorna os dados DEPOIS de atualizar    
    deleteUser: async (_, { id }) => {
      const deleted = await User.findOneAndDelete(id)
      return !!deleted // Força retorno booleano
    }
  }
} 