import type { Request, Response, NextFunction } from "express";
import employeeService from "../services/employeeService";
import { DepartmentInput } from "@shared/types/department";

export async function getDeparmentNames(
  _req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const departmentNames = await employeeService.getDepartmentNames();
    res.status(200).json(departmentNames);
  } catch (err) {
    next(err);
  }
}

export async function getAllDepartments(
  _req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const allDepartments = await employeeService.getAllDepartments();
    res.status(200).json(allDepartments);
  } catch (err) {
    next(err);
  }
}

export async function getDepartmentEmployees(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const department = req.params.department as string;
    const employees = await employeeService.getDepartmentEmployees(department);
    res.status(200).json(employees);
  } catch (err) {
    next(err);
  }
}

export async function createEmployee(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const { firstName, lastName, department } = req.body as DepartmentInput;
    const newEmployee = await employeeService.createEmployee(
      firstName,
      lastName,
      department,
    );
    res.status(200).json(newEmployee);
  } catch (err) {
    next(err);
  }
}
