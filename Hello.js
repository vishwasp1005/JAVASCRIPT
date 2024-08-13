const express = require('express')
const app = express();

const port = 3699;

app.get('/', (req,res)=>{
    res.send("hello world");
})

app.get('/home', (req,res)=>{
    res.send("This is Home");
})

app.get('/about', (req,res)=>{
    res.send("About us");
})

app.get('/contect', (req,res)=>{
    res.send("Contect us");
})

app.get('/services', (req,res)=>{
    res.send("our services");
})

app.listen(port , ()=>{
    console.log(port + "Done");
})