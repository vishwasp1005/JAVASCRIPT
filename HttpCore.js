const http = require('http');

const server = http.createServer((req,res)=>{
   
    // console.log(req.url);

    if(req.url == "/home"){
        res.end("This is home");
    }
    else if(req.url == "/about"){
        res.end("this is about");
    }
    else if(req.url == "/contect"){
        res.end("this is contect");
    }
    else if(req.url == "/service"){
        res.end("this is service");
    }
    else{
        res.end("Hello this is my webpage");
    }
});

const port = 3690;

server.listen(port,()=>{
    console.log("done: ", port);
})