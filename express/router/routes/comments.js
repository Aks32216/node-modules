import express from "express";
import {getCommentRouterHandler} from '../middlewares/comments.js';

const commentsRouter=express.Router({mergeParams:true});

commentsRouter.get('/',getCommentRouterHandler);

export default commentsRouter;