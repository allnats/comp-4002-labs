import type { RequestHandler } from "express";
import z from "zod";

const createRoleSchema = z
  .object({
    name: z.string().trim().min(1),
    employee_id: z.number().positive(),
  })
  .strict();

export const validateCreateRole: RequestHandler = (req, res, next) => {
  const result = createRoleSchema.safeParse(req.body);

  if (!result.success) {
    res.status(400).json({
      error: "Invalid Role data",
      details: z.flattenError(result.error),
    });
    return;
  }

  req.body = result.data;
  next();
};
