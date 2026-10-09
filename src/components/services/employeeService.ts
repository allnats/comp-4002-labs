import type Department from "../../models/department";
import type Employee from "../../models/employee";
import * as employeeRepo from "../repository/employeeRepo";

type validationResponse = {
  status: boolean;
  message?: string;
};

function validateDeparment(
  department: string,
  departmentList: string[],
): validationResponse {
  if (!departmentList.includes(department)) {
    return { status: false, message: "Department doesn't exist" };
  }

  return { status: true };
}

function validateFirstName(firstName: string): validationResponse {
  if (firstName.length < 3) {
    return {
      status: false,
      message: "Firstname must have at least 3 characters",
    };
  }

  return { status: true };
}

function getDeparmentNames(): string[] {
  return employeeRepo.getDeparmentNames();
}

function getAllDepartments(): Department[] {
  return employeeRepo.getAllDepartments();
}

function getDepartmentEmployees(department: string): Employee[] {
  return employeeRepo.getDepartmentEmployees(department);
}

function createEmployee(
  firstName: string,
  lastname: string | undefined,
  department: string,
): void {
  employeeRepo.createEmployee(firstName, lastname, department);
}

const employeeService = {
  validateDeparment,
  validateFirstName,
  createEmployee,
};

export default employeeService;

export {
  type validationResponse,
  employeeService,
  validateDeparment,
  validateFirstName,
  createEmployee,
  getDeparmentNames,
  getAllDepartments,
  getDepartmentEmployees,
};
