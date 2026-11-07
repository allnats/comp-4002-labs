import { Request, Response, NextFunction } from "express";
import * as roleService from "../services/roleService";
import Role from "@shared/types/role";

export async function getAllRoles(
  _req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const allRoles = await roleService.getAllRoles();
    res.status(200).json(allRoles);
  } catch (err) {
    next(err);
  }
}

export async function getRoleNames(
  _req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const roleNames = await roleService.getRoleNames();
    res.status(200).json(roleNames);
  } catch (err) {
    next(err);
  }
}

export async function addRole(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const input = req.body as Role;
    await roleService.addRole(input);
    res.status(200).json({ status: "Role successfully created." });
  } catch (err) {
    next(err);
  }
}
