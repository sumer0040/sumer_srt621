var path=require('path');
var express=require('express');
var app=express();
app.use(express.static(path.join(__dirname+'/Public')))
app.get('/home',(req,res) =>{res.sendFile(path.join(__dirname+'/Views/home.html'));});
module.exports = app; 
