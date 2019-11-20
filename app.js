const express = require('express');
const chalk = require('chalk');
const path = require("path");
const bodyparser = require('body-parser');
const cors = require('cors');
const mongoose=require('mongoose');
////create object 

// app.all('/',function(req,res){
//   ////send just sending a data use send() for sending file use sendFile()
//   res.sendFile(__dirname+"/src/views/index.html");


// });
/////linking css with out a view engine
// app.use(express.static(path.join(__dirname,"/public")));
// app.get('/',function(req,res){
//   res.sendFile(path.join(__dirname,"src/views/index.html"));
// });

////to add ejs change file extention of html  to .ejs


var nav = [{
        link: "/",
        tittle: "HOME"
    },
    {
        link: "/books",
        tittle: "BOOKS"
    },
    {
        link: "/books/addbook",
        tittle: "ADD BOOK"
    },
    {
        link: "/authers",
        tittle: "AUTHORS"
    },
    {
        link: "/authers/addauther",
        tittle: "ADD AUTHORS"
    },
    {
        link: "/signup",
        tittle: "SIGN UP"
    },
    {
        link: "/login",
        tittle: "LOGIN"
    }
];

var app = new express();

const bookrouter = require('./src/routes/bookroute')(nav);
const autherroute = require('./src/routes/autherroute')(nav);
const singnuproutr = require('./src/routes/loginroute')(nav);
const loginrouter = require('./src/routes/signup')(nav);
app.use(bodyparser.json());
app.use(cors())
app.use(bodyparser.urlencoded({ extented: true })); /////to get value of form data
app.use('/authers', autherroute);
app.use('/books', bookrouter);

////connecting from cloud
mongoose.connect("mongodb+srv://akhilem:9539770998@cluster0-rmbxp.mongodb.net/test?retryWrites=true&w=majority");

////mongoose.connect("mongodb://localhost:27017/LibraryApp");/// local mongo db connection
app.use('/addbook', bookrouter);
app.use('/login', singnuproutr)
app.use('/signup', loginrouter);
app.get('/', function(res, res) {
    res.render('index', {
        nav: nav,
        tittle: "Library App"
    });
});

app.use(express.static(path.join(__dirname, "/public")));
app.set('views', './src/views');
app.set('view engine', 'ejs');

////set port 
// app.listen(2020, function() {
//     console.log(chalk.yellowBright(`port ${chalk.redBright("2020")} is active`));
// });

////setting a dynamic coding
app.listen(process.env.PORT||3000,()=>{
    console.log(chalk.yellowBright(`port ${chalk.redBright(process.env.PORT)} is active`))
});