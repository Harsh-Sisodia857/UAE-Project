const express = require("express");
const path = require("path")
const port = 8000;
const app = express()
// css, js file location
app.use(express.static('assests'))
// setting the view engine
app.set('view engine','ejs');
// providing path to view engine
app.set('views',path.join(__dirname,'views'))
//  It parses incoming requests with urlencoded payloads and is based on body-parser
// app.use(express.urlencoded())

// Rendering the content
app.get('/',function(req,res){ 
        return res.render('home',{title : "UAE"})
})

app.get('/leaders',function(req,res){ 
    return res.render('leaders',{title : "leaders"})
})

app.get('/areas',function(req,res){ 
    return res.render('areas',{title : "areas"})
})

app.get('/universities',function(req,res){ 
    return res.render('universities',{title : "universities"})
})

app.get('/contact',function(req,res){ 
    return res.render('contact',{title : "contact"})
})

app.listen(port,function(err){
    if(err){
        res.end("<h1>Error Occur!</h1>")
        return;
    }
    console.log("Server is running at port ",port);
})