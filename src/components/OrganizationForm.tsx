import { type SubmitEvent } from "react";
import useFormInput from "./hooks/useFormInput";
import type Role from "../models/role";
import * as employeeService from "./services/employeeService";
import * as roleService from "./services/roleService";

function OrganizationForm({
  createNewRole,
}: {
  createNewRole: (newRole: Role) => void;
}) {
  const firstName = useFormInput("");
  const lastName = useFormInput("");
  const role = useFormInput("");

  function clearFields() {
    firstName.setValue("");
    lastName.setValue("");
    role.setValue("");
  }

  async function handleFormSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    const firstNameErrors = await firstName.validate(
      employeeService.validateFirstName,
    );
    const roleErrors = await role.validate(roleService.validateRepo);
    const errors: string[] = [...firstNameErrors, ...roleErrors];

    // Break out if there's a validation error
    if (errors.length) {
      alert(errors[0]);
      return;
    }

    const newRole = {
      firstName: firstName.value,
      lastName: lastName.value,
      role: role.value,
    };

    // This one updates the state
    createNewRole(newRole);
    // This one updates the repo (for persistence, when unmounted)
    await roleService.addRole(newRole);

    clearFields();
  }

  return (
    <form action="" onSubmit={handleFormSubmit}>
      <fieldset>
        <legend>Add a new Employee</legend>

        {/* First name Input field */}
        <label htmlFor="fname">First Name</label>
        <input
          type="text"
          name="fname"
          value={firstName.value}
          onChange={(e) => firstName.setValue(() => e.target.value)}
        />

        {/* Last name Input field */}
        <label htmlFor="lname">Last Name</label>
        <input
          type="text"
          name="lname"
          value={lastName.value}
          onChange={(e) => lastName.setValue(() => e.target.value)}
        />

        {/* Role field */}
        <label htmlFor="role">Role</label>
        <input
          type="text"
          name="role"
          value={role.value}
          onChange={(e) => role.setValue(() => e.target.value)}
        />

        <button type="submit">Submit form</button>
      </fieldset>
    </form>
  );
}

export default OrganizationForm;
