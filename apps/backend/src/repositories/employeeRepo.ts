import { prisma } from "../db/prisma";

//TODO: Maybe wrap the data access in a try-catch block to emulate a real repo.

/**
 * Get all Department objects
 * @returns Department[] - List of Departments from the mock.
 */
async function getAllDepartments() {
  const departments = await prisma.departments.findMany({
    select: {
      name: true,
      employees: {
        select: {
          id: true,
          firstname: true,
          lastname: true,
        },
      },
    },
  });

  return departments.map((department) => ({
    name: department.name,
    employees: department.employees.map((employee) => ({
      employee_id: employee.id,
      firstName: employee.firstname,
      lastName: employee.lastname,
    })),
  }));
}

/**
 * Gets all the existing department names
 * @returns string[] - list of department names
 */
async function getDeparmentNames() {
  const deptNames = await prisma.departments.findMany({
    select: {
      name: true,
    },
  });

  return deptNames.map((r) => r.name);
}

/**
 * Gets all the employees form a specific department
 * @param department string
 * @returns an array of Employees
 */
async function getDepartmentEmployees(department: string) {
  const targetDepartment = await prisma.departments.findUnique({
    where: {
      name: department,
    },
    select: {
      employees: {
        select: {
          firstname: true,
          lastname: true,
        },
      },
    },
  });

  if (!targetDepartment) return [];

  return targetDepartment.employees.map((employee) => ({
    firstName: employee.firstname,
    lastName: employee.lastname,
  }));
}

async function getDepartmentById(department_id: number) {
  return prisma.departments.findUnique({
    where: {
      id: department_id,
    },
  });
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
  return prisma.employees.create({
    data: {
      firstname: firstName,
      lastname: lastName ?? null,
      department: {
        connect: {
          name: department,
        },
      },
    },
  });
}

export {
  getAllDepartments,
  getDeparmentNames,
  getDepartmentEmployees,
  getDepartmentById,
  createEmployee,
};
