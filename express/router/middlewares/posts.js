export const postGlobalMiddleware = (req,res,next) =>{
    console.log("Inside post router global hander");
    next();
}

export const getPostHandler = (req,res)=>{
    const {id}=req.params;
    console.log("Received request for post "+id);
    res.status(200).send({message:"post found"});
}
