import { Router, Request, Response } from "express";
import { HealthState } from "../core/state";
import { MongoState } from "../db/mongoState";

const router = Router();

router.get("/health", (_req: Request, res: Response) => {
  res.status(200).json({
    status: "OK",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    service: "Inventory control API",
    serviceState: HealthState.get(),
    mongoState: MongoState.get(),
  });
});

router.get("/livez", (_req: Request, res: Response) => {
  res.status(200).json({
    status: "alive",
    timestamp: new Date().toISOString(),
  });
});

router.get("/readyz", (_req: Request, res: Response) => {
  const serviceState = HealthState.get();
  const mongoState = MongoState.get();

  const isReady = HealthState.isReady() && MongoState.isReady();

  if (!isReady) {
    return res.status(503).json({
      status: "not_ready",
      serviceState,
      mongoState,
      timestamp: new Date().toISOString(),
    });
  }

  res.status(200).json({
    status: "readyz",
    serviceState,
    mongoState,
    timestamp: new Date().toISOString(),
  });
});

export default router;
