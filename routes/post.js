const express = require('express');
const app = express.Router();

app.get('/auth/login', (req, res) => {
    res.send('<h1> Welcome</h1> <p>Back</p>');
 });


 app.get('/auth/register', (req, res) => {
    res.sendFile('index.html',{root:'./'});
 });

 const posts=[
    {id:"1",titre:"post 1",content:"Hello in post 1"},
    {id:"2",titre:"post2",content:"Hello in post 2"}
   ];
 app.get('/post/all',(req,res)=>{
   
    res.json(posts); 

});

app.get('/post/:id',(req, res) => {
    console.log("ID=",req.params.id);
    res.send();
});  


module.exports = app;