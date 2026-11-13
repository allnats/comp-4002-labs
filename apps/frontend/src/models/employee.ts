export default interface Employee {
  employee_id: number;
  firstName: string;
  lastName?: string;
}

export interface EmployeeAPIResponse extends Employee {
  department_id: number;
}

export { type Employee };
