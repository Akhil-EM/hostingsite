const express = require('express');

var signuprouter = express.Router();
var {signupModel}=require('../models/signupModel');
function router(nav) {
    signuprouter.route('/').
    get((req, res) => {
        res.render('sign-up', { nav, tittle: "Signup" })
    });
    

    signuprouter.route('/save')
     .post((req,res)=>{
    var add=new signupModel(req.body);
    add.save((err,data)=>{
        if(err){
            res.json({status:"signup failed"});
        }
        else{
            res.json({status:"signup succes"});
        }

    });
   
})

return signuprouter;
}



module.exports = router;