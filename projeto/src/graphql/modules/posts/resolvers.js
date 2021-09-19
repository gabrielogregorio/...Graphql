import Post from '../../../models/Post'


export default {
  Query: {
    posts: async () => {return await Post.find().populate('author')},
    post: async (_, { id }) => {return await Post.findById(id)},    
  },
  Mutation: {
    createPost: async (_, { data }) => {return await Post.create(data)},
    updatePost: async (_, { id, data }) => {return await Post.findOneAndUpdate(id, data, {new: true})}, // faz o update e retorna os dados DEPOIS de atualizar    
    deletePost: async (_, { id }) => {
      const deleted = await Post.findOneAndDelete(id)
      return !!deleted // Força retorno booleano
    }
  }
} 