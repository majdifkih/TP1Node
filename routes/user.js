const express = require('express');
const app = express.Router();
app.get('/list', (req, res) =>{
    res.send("List of users");
});

module.exports = app;