import  mongoose from "mongoose";

const schemaUser = new mongoose.Schema({
  firstName: {
    type: String,
    require: true
  },
  lastName: {
    type: String,
    require: true
  },
  email: {
    type: String,
  },
  active: {
    type: Boolean,
  }
})

export default mongoose.model('User', schemaUser)