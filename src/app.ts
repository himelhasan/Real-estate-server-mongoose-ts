import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";

const app: Application = express();

// using cors
app.use(cors());

// data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello World!");
});

export default app;
