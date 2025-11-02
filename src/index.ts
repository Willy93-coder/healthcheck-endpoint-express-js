import express, { Application, Request, Response } from "express";
import { env } from "../env";

const app: Application = express();

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello, world" });
});

app.listen(env.PORT, () => {
  console.log(`Server is running on port ${env.PORT}`);
});
