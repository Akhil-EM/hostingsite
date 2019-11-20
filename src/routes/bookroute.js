const express = require('express');

var {AddBookModel}=require('../models/AddBookModel');

var booksrouter = express.Router()
var books;
function router(nav) {
    booksrouter.route('/').get(
        (req, res) => {
            AddBookModel.find((err,data)=>{
                if(err)
                {
                  res.send("error happented")  
                }
                else{
                     books=data;
                    res.render(
                        'books', {
                            nav,
                            tittle: "Books",
                            books
                        }
                    ) 
                }
     })  

        });
    booksrouter.route('/addbook').get(
        (req, res) => {
            res.render(
                'addbook',{
                    nav,
                    tittle: "Add Book"
                }
            )
        });
        booksrouter.get('/viewallapi',(req,res)=>{
            AddBookModel.find((err,data)=>{
                   if(err)
                   {
                     res.send("error happented")  
                   }
                   else{
                       res.send(data)
                   }
        })     
    });
    
        


    booksrouter.route('/save').post(
        (req, res) => {
            var books=new AddBookModel(req.body);
             books.save((error,data)=>{
                 if(error)
                 {
                     
                     /////writeing in a json
                     res.json({"status":"success"})
                     
                 }
                 else
                 {
                    res.json({"status":error})
                 }
             });
             
        });



    booksrouter.route('/:id')
        .get((req, res) => {
            const id = req.params.id;
            res.render('book', {
                nav,
                tittle: "books",
                book: books[id]
            });
        });
    return booksrouter;
}



module.exports = router;