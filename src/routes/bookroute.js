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
                //res.send(data)
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
                     res.json({"status":error})
                     
                 }
                 else
                 {
                    res.json({"status":"success"})
                 }
             });
             
        });
        booksrouter.route('/read').post(
            (req, res) => {
                  var bodydata=req.body;
                  //res.send(data);
                  AddBookModel.findOne({_id:bodydata.id},(err,data)=>{
                    if(err)
                    {
                        res.json({"status":"Failed"});
                    }
                    else if(data.n==0){
                        res.json({status:"No match found"});
                    }
                    else{
                        //res.json({status:data});
                        res.render('book', {
                            nav,
                            tittle: "books",
                            book:data
                        });
                    }
                  })
                
            });
            booksrouter.route('/delete')
            .post((req,res)=>{
                var bodydata=req.body;
                AddBookModel.deleteOne({_id:bodydata.id},(err,data)=>{
                    if(err)
                    {
                        res.json({status:"Failed"});
                    }
                    else if(data.n==0){
                        res.json({status:"No match found"});
                    }
                    else{
                        res.json({status:"Success"});
                    }
                })
            });
            booksrouter.route('/edit').post(
                (req, res) => {
                      var bodydata=req.body;
                      //res.send(data);
                      AddBookModel.findOne({_id:bodydata.id},(err,data)=>{
                        if(err)
                        {
                            res.json({"status":"Failed"});
                        }
                        else if(data.n==0){
                            res.json({status:"No match found"});
                        }
                        else{
                            //res.json({status:data});
                            res.render('editbook', {
                                nav,
                                tittle: "books",
                                book:data
                            });
                        }
                      })
                    
                });
                booksrouter.route('/edit-single-book')
                .post((req,res)=>{
                    var bodydatas=req.body;
                    AddBookModel.updateOne({_id:bodydatas.id},{$set:bodydatas},(err,data)=>{
                        if(err)
                        {
                            res.json({"status":"Failed"});
                        }
                        else if(data.n==0){
                            res.json({status:"No match found"});
                        }
                        else{
                            res.json({status:"Success"});
                        }
                    })
                });
/////using id methode
    // booksrouter.route('/:id')
    //     .get((req, res) => {
    //         const id = req.params.id;
    //         res.render('book', {
    //             nav,
    //             tittle: "books",
    //             book: books[id]
    //         });
    //     });
   
    return booksrouter;
}



module.exports = router;