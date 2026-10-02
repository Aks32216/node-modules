export const getCommentRouterHandler = (req,res)=>{
    const {id}=req.params;

    console.log("Parent post id : ",id);

    res.status(200).send({message:"comments found"});
}