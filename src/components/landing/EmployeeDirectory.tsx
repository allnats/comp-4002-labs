import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import data from "../../data/employee-dept.json";
import "./EmployeeDirectory.css";

interface Department {
  department: string;
  employees: string[];
}

const employeeDeptData: Department[] = data as Department[];

export default function EmployeeDirectory() {
  return (
    <>
      <Header />
      <ListDepartments data={employeeDeptData} />
      <Footer />
    </>
  );
}

function ListDepartments({ data }: { data: Department[] }) {
  return (
    <div className="container-employee-dept">
      {data.map((department) => (
        <article key={department.department}>
          <h2>{department.department}</h2>
          <ListEmployees names={department.employees} />
        </article>
      ))}
    </div>
  );
}

function ListEmployees({ names }: { names: string[] }) {
  return (
    <ul>
      {names.map((name, idx) => (
        <li key={`${name}${idx}`}>{name}</li>
      ))}
    </ul>
  );
}

export { EmployeeDirectory };
