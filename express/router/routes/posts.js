import express from "express";
import {postGlobalMiddleware,getPostHandler} from "../middlewares/posts.js"
import commentsRouter from "./comments.js";
const postRouter=express.Router();

postRouter.use(postGlobalMiddleware);

postRouter.use('/:id/comments',commentsRouter);

postRouter.get('/:id',getPostHandler);


// postRouter.use(userGlobalErrorHandlerMiddleware);

export default postRouter;