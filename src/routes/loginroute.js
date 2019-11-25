const express = require('express');

var loginroute = express.Router();
var {signupModel}=require('../models/signupModel');
function router(nav) {
    loginroute.route('/').
    get((req, res) => {
        res.render('login', { nav, tittle: "Login" })
    });

    loginroute.route('/save')
    .post((req,res)=>{

            signupModel.findOne({email:req.body.username, email:req.body.password},(err,data)=>{
                if(err){
                    res.json({status:"error"})
                    throw err;
                }
                else if(!data){
                    res.json({status:"failed"});
                }
                else{
                    res.json({status:"Success"})
                }
            });
    })


    
    return loginroute;
}

module.exports = router;