import Department from "../../models/department";
import Employee from "../../models/employee";

const baseUrl = import.meta.env.VITE_API_BASE_URL;
const endpoint = `${baseUrl}/api/employees`;

//TODO: Maybe wrap the data access in a try-catch block to emulate a real repo.

async function readJson<T>(response: Response): Promise<T> {
  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  return (await response.json()) as T;
}

/**
 * Get all Department objects
 * @returns Department[] - List of Departments from the mock.
 */
async function getAllDepartments() {
  const response = await fetch(endpoint);
  return await readJson<Department[]>(response);
}

/**
 * Gets all the existing department names
 * @returns string[] - list of department names
 */
async function getDeparmentNames() {
  const response = await fetch(`${endpoint}/departments`);
  return await readJson<string[]>(response);
}

/**
 * Gets all the employees form a specific department
 * @param department string
 * @returns an array of Employees
 */
async function getDepartmentEmployees(department: string) {
  const response = await fetch(`${endpoint}/department/${department}`);
  return await readJson<Employee[]>(response);
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
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstName, lastName, department }),
    });

    await readJson<void>(response);
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
