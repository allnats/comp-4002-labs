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

function createEmployee(
  firstName: string,
  lastname: string | undefined,
  department: string,
): void {
  employeeRepo.createEmployee(firstName, lastname, department);
}

const employeeService = {
  getDepartmentNames,
  getAllDepartments,
  getDepartmentEmployees,
  createEmployee,
};

export default employeeService;
