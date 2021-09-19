import mongoose from "mongoose";

const schemaPost = new mongoose.Schema({
  title: {
    type: String, 
    require: true
  },
  content: {
    type: String,
    require: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: 'User'
  }
})

export default mongoose.model('Post', schemaPost)