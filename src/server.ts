import express, { Application, Request, Response } from "express";
const app: Application = express();

// Health check endpoint (app)
app.get("/health", (_req: Request, res: Response) => {
  res.status(200).json({
    status: "OK",
    timestamp: new Date().toISOString(),
    service: "Inventory control API",
  });
});

export { app };
