import { Router, Request, Response } from "express";

const router = Router();

// Health check endpoint (app)
router.get("/health", (_req: Request, res: Response) => {
  res.status(200).json({
    status: "OK",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    service: "Inventory control API",
  });
});

router.get("/livez", (_req: Request, res: Response) => {
  res.status(200).json({
    message: "livez",
  });
});

router.get("/readyz", (_req: Request, res: Response) => {
  res.status(200).json({
    message: "readyz",
  });
});

export default router;
