const mongoose=require('mongoose');


var AddBookModel=mongoose.model('books',{
  bookname:String,
  author:String,
  genere:String,
  image:String
});

module.exports={AddBookModel};