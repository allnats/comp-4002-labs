import { Router } from "express";
import * as employeeController from "../controllers/employeeController";
import {
  validateCreateEmployee,
  validateGetDepartmentEmployees,
} from "../validations/employeeValidation";

export const employeeRoutes = Router();

employeeRoutes.get("/", employeeController.getAllDepartments);

employeeRoutes.get("/departments", employeeController.getAllDepartments);

employeeRoutes.get(
  "/department/:department",
  validateGetDepartmentEmployees,
  employeeController.getDepartmentEmployees,
);

employeeRoutes.post(
  "/",
  validateCreateEmployee,
  employeeController.createEmployee,
);
