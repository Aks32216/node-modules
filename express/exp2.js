import express from "express";

const app=express();


app.get('/',(req,res)=>{
    res.send("Hello world");
});

app.get('/about',(req,res)=>{
    res.send("About page");

})

app.get('/time',(req,res)=>{
    res.send({"time":new Date().toString()});
})

app.listen(6000,()=>{
    console.log("Server listening on port 5000");
});