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
                 var bodydata=req.body
            signupModel.findOne({email:bodydata.username, password:bodydata.password},(err,data)=>{
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
                //res.send(bodydata);
            });
    })


    
    return loginroute;
}

module.exports = router;