import express from "express";
import url from "node:url";

const app=express();

app.use(express.json());

app.post('/users',(req,res)=>{
    const u=url.parse(req.url);
    console.log(u);
    const {name,email,password}=req.body;
    console.log(name,email,password);
    return res.send("Saved successfully");
})


app.listen(6000,()=>{
    console.log("Server listening on port 5000");
})