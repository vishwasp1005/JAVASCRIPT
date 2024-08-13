const express = require("express");
const app = express();

app.use(express.json());

const user = [{
        name: "het"
    },
    {
        name: "mann"
    }

]

app.post('/user', (req,res)=>{
    const {name} = req.body;
    user.push(name);
    res.send(name)
})

app.get('/user',(req,res)=>{
    res.send(user)
});

app.patch('/user/:index', (req,res)=>{
    const update = req.body;
    const index = req.params.index;
   const {name} = req.body; 

   user[index].name = update;
   res.send("thai gyu")
});

app.delete('/user/:index', (req,res)=>{
    user.splice(req.params.index, 1)
    res.send("user ko mita diya gya hai")
})

app.listen(3000);