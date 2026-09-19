import { useState } from "react";
import type { SubmitEvent } from "react";
import type Department from "../models/department";

function EmployeeForm({
  departmentList,
  updateEmployeeDept,
}: {
  departmentList: string[];
  updateEmployeeDept: React.Dispatch<React.SetStateAction<Department[]>>;
}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [department, setDepartment] = useState("");

  function clearFields() {
    setFirstName("");
    setLastName("");
    setDepartment("");
  }

  function handleFormSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(`${firstName} ${lastName}`);
    console.log(`Department: ${department}`);

    // Validation here
    if (firstName.length < 4 || !departmentList.includes(department)) {
      alert("Invalid form");
      clearFields();
    }

    updateEmployeeDept((currList) =>
      currList.map((d) => {
        if (d.name === department) {
          return { ...d, employees: [...d.employees, { firstName, lastName }] };
        }
        return d;
      }),
    );
    clearFields();
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <fieldset>
        <legend>Add a new Employee</legend>

        {/* First name Input field */}
        <label htmlFor="fname">First Name</label>
        <input
          type="text"
          value={firstName}
          name="fname"
          onChange={(e) => setFirstName(() => e.target.value)}
        />

        {/* Last name input field. */}
        <label htmlFor="lname">Last Name</label>
        <input
          type="text"
          name="lname"
          value={lastName}
          onChange={(e) => setLastName(() => e.target.value)}
        />

        {/* Department drop down list */}
        <label htmlFor="department">Employee Department:</label>
        <select
          name="department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        >
          <option value="">Select a Department</option>
          {departmentList.map((dept, idx) => (
            <option value={dept} key={`${dept}${idx}`}>
              {dept}
            </option>
          ))}
        </select>

        {/* Submit button */}
        <button type="submit">Submit form</button>
      </fieldset>
    </form>
  );
}

export default EmployeeForm;
