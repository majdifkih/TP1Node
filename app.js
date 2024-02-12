const express = require('express');
//create instance of express
const app = express();
const users =require('./routes/user');
const posts =require('./routes/post');

app.use("/user", users);

app.use('/',posts)



app.get('/', (req, res) => {
    res.send('welcome');
});
app.get('/template', (req, res) => {
    res.sendFile(__dirname+'/index.html');

});
app.get('/middle',(req,res,next)=>{
    console.log('Request number 1');
    next();
},(req, res, next) => {
    res.send('Request number 2');
    
});
app.listen(5000,()=>{
    console.log('listening on port 5000');
});