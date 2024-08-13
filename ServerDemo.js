const express = require('express')
const app = express()
const fs = require('fs')

app.get('/add/:data', (req,res)=> {
    res.setHeader('Conrtent-Type', 'text/plain');
    fs.appendFile('file.txt',req.params.data, (err,data)=>{
        if(err){
            res.end("file nathi maro bhai");
        }
        else{
            res.end("added successfully")
        }
    })
})

app.get('/remove', (req,res)=> {
    res.setHeader('Conrtent-Type', 'text/plain');
    fs.writeFile('file.txt',req.params.data, (err,data)=>{
        if(err){
            res.end("file nathi maro bhai");
        }
        else{
            res.end("added successfully")
        }
    })
})