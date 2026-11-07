import type { RequestHandler } from "express";
import z from "zod";

const createEmployeeSchema = z
  .object({
    firstName: z.string().trim().min(1),
    lastName: z.string().trim().min(1).optional(),
    department: z.string().trim().min(1),
  })
  .strict();

export const validateCreateEmployee: RequestHandler = (req, res, next) => {
  const result = createEmployeeSchema.safeParse(req.body);

  if (!result.success) {
    res.status(400).json({
      error: "Invalid Employee data",
      details: z.flattenError(result.error),
    });
    return;
  }

  req.body = result.data;
  next();
};

export const validateGetDepartmentEmployees: RequestHandler = (
  req,
  res,
  next,
) => {
  const result = z.string().trim().safeParse(req.params.department);

  if (!result.success) {
    res.status(400).json({
      error: "Invalid department name",
    });
    return;
  }

  next();
};
