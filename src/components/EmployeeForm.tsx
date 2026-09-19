import { useState } from "react";
import type { SubmitEvent } from "react";

function EmployeeForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

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
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(() => e.target.value)}
        />
      </fieldset>
    </form>
  );
}

export default EmployeeForm;
