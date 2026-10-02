import express from "express";
import {
  userGlobalMiddleware,
  getUserHandler,
  userGlobalErrorHandlerMiddleware,
} from "../middlewares/users.js";
const userRouter = express.Router();

userRouter.use(userGlobalMiddleware);

userRouter.get("/:id", getUserHandler);

userRouter.use(userGlobalErrorHandlerMiddleware);

export default userRouter;
