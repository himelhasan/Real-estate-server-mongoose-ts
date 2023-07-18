import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import userRouter from "./app/module/user/user.route";

const app: Application = express();

// using cors
app.use(cors());

// data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello World!");
});

// application routes

app.use("/api/v1/users", userRouter);

export default app;
