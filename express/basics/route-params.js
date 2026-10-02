import express from "express";

const app=express();


app.get('/greet/:name',(req,res)=>{
    res.send(`Hello ${req.params.name}`);
});

app.get('/add/:a/:b',(req,res)=>{
    const a = Number(req.params.a);
    const b = Number(req.params.b);
    if(Number.isNaN(a) || Number.isNaN(b)){
        return res.status(400).send("Invalid numbers");
    }

    res.send(`${a}+${b}=${a+b}`);
})

app.listen(6000,()=>{
    console.log("Server listening on port 5000");
});