import mongoose from 'mongoose';
// const { Schema } = mongoose;


const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email:{
    type:String,
    required:true,
    unique:true,
  },
  role: {
    type: String,
    default: 'user',
  },

  password:{
    type:String,
    required:true,
  },
});


const User = mongoose.model('User'  , UserSchema);
export default User;