import express from "express";

const app=express();

app.get('/topmethod',(req,res)=>{
    res.send("top method");
})

const globalHandler1=(req,res,next)=>{
    console.log("Global handler 1");
    next();
}

const globalHandler2=(req,res,next)=>{
    console.log("Global handler 2");
    next();
}

const localHandler1=(req,res,next)=>{
    console.log("Local handler 1");
    next();
}

const localHandler2=(req,res,next)=>{
    console.log("Local handler 2");
    next();
}

app.use(globalHandler1);
app.use(globalHandler2);

app.get('/greet',localHandler2,(req,res,next)=>{
    console.log("greet");
    res.send("done");
})

app.get('/post',localHandler1,(req,res)=>{
    console.log("post");
    res.send("done1");
})

app.listen(6000,()=>{
    console.log("Server listening on port 5000");
});