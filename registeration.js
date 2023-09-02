const mongoose = require("mongoose");
const { Schema } = mongoose;

const RegisterSchema = new Schema({
  usertype: {
    type: String,
  },
  fullname: {
    type: String,
  },
  institute: {
    type: String,
  },
  department: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  idno: {
    type: String,
    unique: true,
  },
  input_club_name:{
    type: String,
  },
  input_club_desc:{
    type: String,
  },
  club_logo_input:{
    type:String,
  },
  faculty_id:{
    type: String,
  },
  gender: {
    type: String,
  },
  age: {
    type: Number,
  },
  password: {
    type: String,
  },
});

const Register = mongoose.model("RegistrationData", RegisterSchema);
Register.createCollection();
module.exports = Register;
