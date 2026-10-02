import express from "express";

const app=express();

app.use((req,res,next)=>{
    console.log("Logger Attached");
    next();
})

app.get('/',(req,res)=>{
    res.send("Hello world");
})

app.post('/',(req,res)=>{
    const bodyStream=[];
    req.on('data',(data)=>{
        console.log("chunk of data received");
        bodyStream.push(data);
    }).on('end',()=>{
        console.log("body parsing done");
        const bufferData=Buffer.concat(bodyStream);
        const reqBody=JSON.parse(bufferData);
        throw Error("error occured");

        console.log(reqBody);
    });

    res.send({message: "Parsed success"})
})

app.use((err,req,res,next)=>{
    console.log(err);
    res.status(400).send({message: "bad request data"});
})

app.listen(3000,()=>{
    console.log("server listening on 3000");
})