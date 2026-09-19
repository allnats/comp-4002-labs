import { useState } from "react";
import EmployeeForm from "../EmployeeForm";
import data from "../../data/employee-dept.json";
import type Department from "../../models/department";
import type Employee from "../../models/employee";
import "./EmployeeDirectory.css";

const employeeDeptData: Department[] = data;

export default function EmployeeDirectory() {
  const [employeeDepartment, setEmployeeDepartment] =
    useState(employeeDeptData);

  const departmentList: string[] = employeeDepartment.map((d) => d.name);

  return (
    <>
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
