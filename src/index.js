const express = require('express')
const route =  require('./routes/route')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app =express()


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect("mongodb+srv://user:ISjwDttcDksEnCcv@cluster0.hja9z.mongodb.net/group44database?authSource=admin&replicaSet=atlas-3xefdb-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true" ,
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

