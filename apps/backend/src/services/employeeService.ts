import { DbEmployeeType } from "../models/dbModel";
import * as employeeRepo from "../repositories/employeeRepo";

async function getDepartmentNames() {
  return employeeRepo.getDeparmentNames();
}

async function getAllDepartments() {
  return employeeRepo.getAllDepartments();
}

async function getDepartmentEmployees(department: string) {
  return employeeRepo.getDepartmentEmployees(department);
}

async function createEmployee(
  firstName: string,
  lastname: string | undefined,
  department: string,
): Promise<DbEmployeeType> {
  return await employeeRepo.createEmployee(firstName, lastname, department);
}

const employeeService = {
  getDepartmentNames,
  getAllDepartments,
  getDepartmentEmployees,
  createEmployee,
};

export default employeeService;
