import { Request, Response, NextFunction } from "express";
import * as roleService from "../services/roleService";
import { DbRoleType } from "../models/dbModel";
import { Prisma } from "../../generated/prisma/client";

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
    const input = req.body as DbRoleType;
    const newRole = await roleService.addRole(input);
    res.status(200).json(newRole);
  } catch (err) {
    if (
      err instanceof Prisma.PrismaClientKnownRequestError &&
      err.code === "P2002"
    ) {
      res.status(409).json({
        error: "A role with that name or employee already exists",
      });
      return;
    }
    next(err);
  }
}
