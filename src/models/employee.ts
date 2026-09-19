import type Department from "./department";

export default interface Employee {
  firstName: string;
  lastName?: string;
}

interface EmployeesByDepartment {
  department: Department;
  employees: Employee[];
}

export { type Employee, type EmployeesByDepartment };
