import express from "express";
import { createUser } from "./user.controller";

const userRouter = express.Router();

userRouter.post("/", createUser);

export default userRouter;
