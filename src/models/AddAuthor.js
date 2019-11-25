const mongoose=require('mongoose');


var AddauthorModel=mongoose.model('auther',{
  name:String,
  dob:String,
  discription:String,
  awards:String,
  majworks:String,
  image:String
});

module.exports={AddauthorModel};