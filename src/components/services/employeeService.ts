import * as employeeRepo from "../repository/employeeRepo";

type validationResponse = {
  status: boolean;
  message?: string;
};

async function validateDeparment(department: string) {
  const errorMessages: string[] = [];
  const departmentList = await getDepartmentNames();
  if (!departmentList.includes(department)) {
    errorMessages.push("Department doesn't exist");
  }

  return errorMessages;
}

async function validateFirstName(firstName: string) {
  const errorMessages: string[] = [];
  if (firstName.length < 3) {
    errorMessages.push("Firstname must have at least 3 characters.");
  }

  return errorMessages;
}

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
  validateDeparment,
  validateFirstName,
  createEmployee,
  getAllDepartments,
  getDepartmentNames,
};

export default employeeService;

export {
  type validationResponse,
  employeeService,
  validateDeparment,
  validateFirstName,
  createEmployee,
  getDepartmentNames,
  getAllDepartments,
  getDepartmentEmployees,
};
