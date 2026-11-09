export interface DbRoleType {
  id: number;
  name: string;
  employee_id: number;
}

export interface DbEmployeeType {
  id: number;
  firstname: string;
  lastname: string;
  department_id: number;
}

export interface DbDepartmentType {
  id: number;
  name: string;
}
