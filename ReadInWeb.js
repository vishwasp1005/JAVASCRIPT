const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
   
    // console.log(req.url);

    if(req.url == "/home"){
        res.end(home);
    }
    else if(req.url == "/about"){
        res.end(about);
    }
    else{
        res.end("Hello this is my webpage");
    }
});

let home = fs.readFile('home.txt',(err,data)=>{
    home = data.toString();
})  

let about = fs.readFile('about.txt',(err,data)=>{
    about = data.toString();
})  

const port = 3699;

server.listen(port,()=>{
    console.log("done: ", port);
})