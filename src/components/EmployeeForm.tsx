import { useState } from "react";
import type { SubmitEvent } from "react";

function EmployeeForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const deptList: string[] = ["IT", "Human Resources", "Accounting"];

  function handleFormSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(`${firstName} ${lastName}`);
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
        <select name="department">
          <option value="" selected>
            Select a Department
          </option>
          {deptList.map((dept) => (
            <option value={dept}>{dept}</option>
          ))}
        </select>
      </fieldset>
    </form>
  );
}

export default EmployeeForm;
