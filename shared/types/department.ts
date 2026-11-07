import type Employee from "./employee";

export default interface Department {
  name: string;
  employees: Employee[];
}

export interface DepartmentInput extends Employee {
  department: string;
}
