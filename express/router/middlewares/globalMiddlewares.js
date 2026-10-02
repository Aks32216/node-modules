

export const globalHandler = (req,res,next)=>{
    console.log("In global Handler");
    next();
}

export const globalErrorHandler = (err,req,res,next)=>{
    console.log("Inside global error handler");
    res.status(400).send({"message":"bad request"});
}