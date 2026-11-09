import { type SubmitEvent } from "react";
import useFormInput from "./hooks/useFormInput";
import type { Role, NewRole } from "../models/role";
import * as roleService from "./services/roleService";

function OrganizationForm({
  roles,
  createNewRole,
}: {
  roles: Role[];
  createNewRole: (newRole: Role) => void;
}) {
  const role = useFormInput("");
  const employee_id = useFormInput("");

  function clearFields() {
    role.setValue("");
    employee_id.setValue("");
  }

  async function handleFormSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    const roleErrors = await role.validate(roleService.validateRepo);
    const errors: string[] = [...roleErrors];

    // Break out if there's a validation error
    if (errors.length) {
      alert(errors[0]);
      return;
    }

    const newRole: NewRole = {
      employee_id: Number(employee_id.value),
      name: role.value,
    };

    const newEmployee = roles.find(
      (r) => r.employee_id === Number(employee_id.value),
    );

    if (!newEmployee) {
      alert("Selected employee could not be found.");
      return;
    }

    // This one updates the repo (for persistence, when unmounted)
    const response = await roleService.addRole(newRole);
    // This one updates the state

    createNewRole({
      ...response,
      firstName: newEmployee.firstName,
      lastName: newEmployee?.lastName,
    });

    clearFields();
  }

  return (
    <form action="" onSubmit={handleFormSubmit}>
      <fieldset>
        <legend>Add a new Employee</legend>

        <label htmlFor="employee">Employee</label>
        <select
          name="employee"
          value={employee_id.value}
          onChange={(e) => employee_id.setValue(e.target.value)}
        >
          <option value="">Select an Employee</option>
          {roles.map((role) => (
            <option value={role.employee_id} key={role.employee_id}>
              {role.firstName} {role.lastName}
            </option>
          ))}
        </select>

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
