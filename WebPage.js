const express = require('express');
const fs = require('fs');
const app = express();

const port = 3000;

app.get('/home', (req,res)=>{
    res.setHeader('Content-Type', 'text/plain');
    fs.readFile('home.txt', (err,data)=>{ 
        res.send(data.toString())        
    })
});

app.get('/about', (req,res)=>{
    res.setHeader('Content-Type', 'text/plain');
    fs.readFile('about.txt', (err,data)=>{
        res.send(data.toString())
    })
});

app.get('/services', (req,res)=>{
    res.setHeader('Content-Type', 'text/plain');
    fs.readFile('services.txt', (err,data)=>{
        res.send(data.toString())
    })
});

app.get('/contact', (req,res)=>{
    res.setHeader('Content-Type', 'text/plain'); 
    fs.readFile('contact.txt', (err,data)=>{
    res.send(data.toString())
    })
});


app.listen(port,()=>{
    console.log("done") 
})