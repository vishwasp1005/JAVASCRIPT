const fs = require("fs");

fs.exists('batman.txt', (exists) => {
    console.log(exists);
});

fs.readFile('batman.txt',(err,data)=>{
    console.log(data.toString());
});

fs.writeFile('batman.txt','No Het is real Batman...',(err,data)=>{

});

fs.appendFile('batman.txt','I am vengenence',(err,data)=>{

})

//copy
fs.readFile('batman.txt',(err,data)=>{
    fs.writeFile('newBatman.txt',data,(err,data)=>{

    })
})
