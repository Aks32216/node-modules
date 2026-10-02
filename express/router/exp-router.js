import express from "express";
import {globalHandler, globalErrorHandler} from "./middlewares/globalMiddlewares.js";
import userRouter from "./routes/users.js";
import postRouter from "./routes/posts.js"; 

const app=express();

app.use(express.json());

app.use(globalHandler);

app.use('/users',userRouter);
app.use('/post',postRouter);

app.use(globalErrorHandler);


app.listen(6000,()=>{
    console.log("Server listening on port 5000");
});