import express from "express";

const app=express();

app.get('/',(req,res)=>{
    throw new Error("Error occured")
})

app.get('/errorTesting',(req,res)=>{
    try {
        throw new Error("Error occured");
    } catch (error) {
        next(error);
    }
})

app.use((err,req,res,next)=>{
    console.log("Inside global error handler");
    console.log(err);
    res.status(400).send({message: "bad request data"});
})

app.listen(6000,()=>{
    console.log("Server listening on port 5000");
});