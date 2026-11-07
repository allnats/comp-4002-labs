import { Router } from "express";
import * as roleController from "../controllers/roleController";
import { validateCreateRole } from "../validations/roleValidation";

export const roleRoutes = Router();

roleRoutes.get("/", roleController.getAllRoles);

roleRoutes.get("/titles", roleController.getRoleNames);

roleRoutes.post("/", validateCreateRole, roleController.addRole);
