import express, { Application } from "express";
import healthRoutes from "./routes/healthRoutes";

const app: Application = express();

app.use("/api", healthRoutes);

export { app };
