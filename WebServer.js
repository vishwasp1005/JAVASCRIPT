const http = require('http');
const fs = require('fs');
const path = require('path');


const server = http.createServer((req,res)=>{
   
    // console.log(req.url);
    
    if(req.url == "/home"){
        fs.readFile('home.html', (err,data)=>{
            res.end(data);
        });
    }
    else if(req.url == "/about"){
        fs.readFile('about.html', (err,data)=>{
            res.end(data);
        });
    }
    else if(req.url == "/contect"){
        fs.readFile('contect.html', (err,data)=>{
            res.end(data);
        });
    }
    else if(req.url == "/service"){
        fs.readFile('service.html', (err,data)=>{
            res.end(data);
        });
    }
    else if(req.url == '/'){
        fs.readFile('main.html', (err,data)=>{
            res.end(data);
        });
    }
    else{
        res.end("Hello "+path.basename(req.url).toUpperCase()+" bhai...barobar url nokho ne!");
    }
});

const port = 3690;

server.listen(port,()=>{
    console.log("done: ", port);
})