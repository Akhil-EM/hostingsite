const mongoose=require('mongoose');


var userschema=new mongoose.Schema({
  name:String,
  password:String,
  email:String,
  dob:String,
  genderradio:String,
  phone:String
});
var signupModel=mongoose.model('userdata',userschema)
module.exports={signupModel};