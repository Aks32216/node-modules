import express from "express";
import cors from "cors";

const app=express();


// option 1: allow everything
// app.use(cors());    

// option 2: define all config
app.use(cors({
    origin: 'http://localhost:8000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
    exposedHeaders: ['Content-Range', 'X-Content-Range'],
    maxAge: 86400,
}))

app.get('/',(req,res)=>{
    res.send("Hello world");
})

app.listen(6001,()=>{
    console.log("Server listening on port 6001");
});