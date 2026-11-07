import "dotenv/config";
import express from "express";
import cors from "cors";
import type { Request, Response, NextFunction } from "express";

import { employeeRoutes } from "./routes/employeeRoute";
import { roleRoutes } from "./routes/roleRoute";

const app = express();

const frontendUrl = process.env.FRONTEND_URL;

if (!frontendUrl) {
  throw new Error("FRONTEND_URL is required");
}

// MIDDLEWARE
app.use(cors({ origin: frontendUrl }));
app.use(express.json());

// ROUTES
// app.use("/api/monsters", monsterRoutes);
app.use("/api/employees", employeeRoutes);
app.use("/api/roles", roleRoutes);

// Central error handler
app.use((error: unknown, _req: Request, res: Response, _next: NextFunction) => {
  console.error(error);
  res.status(500).json({
    error: "Unexpected server error",
  });
});

export default app;
