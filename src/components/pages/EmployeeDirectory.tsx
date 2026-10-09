import type Department from "../../models/department";
import type Employee from "../../models/employee";

import useEmployee from "../hooks/useEmployee";
import Header from "../common/header/Header";
import EmployeeForm from "../EmployeeForm";
import "./EmployeeDirectory.css";

export default function EmployeeDirectory() {
  const { employeeDepartment, getDepartmentNames, setEmployeeDepartment } =
    useEmployee();

  const departmentList: string[] = getDepartmentNames();

  return (
    <>
      <Header
        title="Employee Directory"
        greeting="List of employees by their departments"
      />
      <ListDepartments data={employeeDepartment} />
      <EmployeeForm
        departmentList={departmentList}
        updateEmployeeDept={setEmployeeDepartment}
      />
    </>
  );
}

function ListDepartments({ data }: { data: Department[] }) {
  return (
    <div className="container-employee-dept">
      {data.map((department) => (
        <article key={department.name}>
          <h2>{department.name}</h2>
          <ListEmployees names={department.employees} />
        </article>
      ))}
    </div>
  );
}

function ListEmployees({ names }: { names: Employee[] }) {
  return (
    <ul>
      {names.map((employee, idx) => (
        <li key={`${employee.firstName}${employee.lastName ?? ""}${idx}`}>
          {employee.firstName} {employee.lastName}
        </li>
      ))}
    </ul>
  );
}

export { EmployeeDirectory };
