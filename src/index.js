const express = require('express')
const route =  require('./routes/route')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app =express()


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect("mongodb+srv://rohit2424:AdMyJHKIfWtpT31H@cluster0.ki3d0.mongodb.net/group44Database" ,
 { useNewUrlParser: true})
 
.then(() => {
    console.log("MongoDb connected")
}).catch((err) => {
    console.log(err.message)
});

app.use('/' , route)

app.listen( process.env.Port || 3000 ,function(){
    console.log('App running on port ' + (process.env.PORT || 3000))
});

