import { mockDepartmentData } from "./mockDepartmentData";

//TODO: Maybe wrap the data access in a try-catch block to emulate a real repo.

/**
 * Get all Department objects
 * @returns Department[] - List of Departments from the mock.
 */
async function getAllDepartments() {
  return mockDepartmentData;
}

/**
 * Gets all the existing department names
 * @returns string[] - list of department names
 */
async function getDeparmentNames() {
  return mockDepartmentData.map((d) => d.name);
}

/**
 * Gets all the employees form a specific department
 * @param department string
 * @returns an array of Employees
 */
async function getDepartmentEmployees(department: string) {
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
async function createEmployee(
  firstName: string,
  lastName: string | undefined,
  department: string,
) {
  try {
    const targetDepartment = await getDepartmentEmployees(department);

    if (!targetDepartment) {
      throw new Error(
        `Hey! Can't find ${department} for new employee ${firstName}`,
      );
      return;
    }

    targetDepartment.push({ firstName, lastName });
  } catch (err) {
    if (err instanceof Error) {
      throw err;
    } else {
      throw new Error("RepositoryError: Failed to create an employee.", {
        cause: err,
      });
    }
  }
}

export {
  getAllDepartments,
  getDeparmentNames,
  getDepartmentEmployees,
  createEmployee,
};
