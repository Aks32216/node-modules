export const userGlobalMiddleware = (req,res,next) =>{
    console.log("Inside user router global hander");
    next();
}

export const getUserHandler = (req,res)=>{
    console.log("Inside get user handler");
    const {id}=req.params;
    console.log(id);
    console.log("Received request for user "+id);
    res.status(200).send({message:"user found"});
}

export const userGlobalErrorHandlerMiddleware = (err,req,res,next)=>{
    console.log("Inside user router global error handler");
    res.status(400).send({"message":"bad request"});
}