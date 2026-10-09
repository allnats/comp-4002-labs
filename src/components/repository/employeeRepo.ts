import type Department from "../../models/department";
import type Employee from "../../models/employee";
import { mockDepartmentData } from "./mockDepartmentData";

//TODO: Maybe wrap the data access in a try-catch block to emulate a real repo.

/**
 * Get all Department objects
 * @returns Department[] - List of Departments from the mock.
 */
function getAllDepartments(): Department[] {
  return mockDepartmentData;
}

/**
 * Gets all the existing department names
 * @returns string[] - list of department names
 */
function getDeparmentNames(): string[] {
  return mockDepartmentData.map((d) => d.name);
}

/**
 * Gets all the employees form a specific department
 * @param department string
 * @returns an array of Employees
 */
function getDepartmentEmployees(department: string): Employee[] {
  const targetDepartment = mockDepartmentData.find(
    (d) => d.name === department,
  );

  if (!targetDepartment) return [];

  return targetDepartment.employees;
}

/**
 *
 * Creates a new Employee
 *
 * @param firstName first name of the new employee
 * @param lastName last name of the new employee
 * @param department where the employee will work
 * @returns
 */
function createEmployee(
  firstName: string,
  lastName: string | undefined,
  department: string,
) {
  const targetDepartment = getDepartmentEmployees(department);

  if (!targetDepartment) {
    console.error(
      `Hey! Can't find ${department} for new employee ${firstName}`,
    );
    return;
  }

  targetDepartment.push({ firstName, lastName });
}

export {
  getAllDepartments,
  getDeparmentNames,
  getDepartmentEmployees,
  createEmployee,
};
