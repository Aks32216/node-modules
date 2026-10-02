import express from "express";
import http from "node:http";

const app=express();

app.use(express.json());


app.use((req,res,next)=>{
    console.log(req instanceof http.IncomingMessage);
    console.log(res instanceof http.ServerResponse);
    
    console.log(typeof req.body);
    console.log(typeof req.get);
    console.log(typeof res.json);

    next();
})

app.get('/footgun',(req,res,next)=>{
    res.send("First response");
    console.log("header send after send:",res.headersSent);
    next();
})

app.get('/footgun',(req,res)=>{
    if(!res.headersSent){
        res.send('second');
    } else {
        console.log("Cannot write header already send");
    }
})

app.get('/hang',(req,res,next)=>{
    return;
    res.send("Sending now");
})

app.listen(6000,()=>{
    console.log("Server listening on port 5000");
});