import express from "express";
import { userController } from "../controller/UserController";
import { imageRouter } from './imageRouter';

export const userRouter = express.Router();

userRouter.post("/signup", userController.signup);
userRouter.post("/login", userController.login);
