import { type SubmitEvent } from "react";
import type Department from "../models/department";
import useFormInput from "./hooks/useFormInput";
import employeeService from "./services/employeeService";

type EmployeeFormProps = {
  departmentList: string[];
  updateEmployeeDept: React.Dispatch<React.SetStateAction<Department[]>>;
};

function EmployeeForm({
  departmentList,
  updateEmployeeDept,
}: EmployeeFormProps) {
  const firstName = useFormInput("");
  const lastName = useFormInput("");
  const department = useFormInput("");

  function clearFields() {
    firstName.setValue("");
    lastName.setValue("");
    department.setValue("");
  }

  async function handleFormSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(`${firstName.value} ${lastName.value}`);
    console.log(`Department: ${department.value}`);

    /** Call Service here to validate the form */
    const firstNameErrors = await firstName.validate(
      employeeService.validateFirstName,
    );
    const departmentErrors = await department.validate(
      employeeService.validateDeparment,
    );
    const errors: string[] = [...firstNameErrors, ...departmentErrors];

    // Break out if there's a validation error
    if (errors.length) {
      alert(errors[0]);
      return;
    }

    const newEmployee = {
      firstName: firstName.value,
      lastName: lastName.value || undefined,
    };

    // This is the block of code to update employees pre lab 3.1
    updateEmployeeDept((currentList) =>
      currentList.map((currentDepartment) => {
        if (currentDepartment.name === department.value) {
          return {
            ...currentDepartment,
            employees: [...currentDepartment.employees, newEmployee],
          };
        }

        return currentDepartment;
      }),
    );

    // This this the block of code to update employees in lab 3.1 and after
    employeeService.createEmployee(
      firstName.value,
      lastName.value,
      department.value,
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
          value={firstName.value}
          name="fname"
          onChange={(e) => firstName.setValue(() => e.target.value)}
        />

        {/* Last name input field. */}
        <label htmlFor="lname">Last Name</label>
        <input
          type="text"
          name="lname"
          value={lastName.value}
          onChange={(e) => lastName.setValue(() => e.target.value)}
        />

        {/* Department drop down list */}
        <label htmlFor="department">Employee Department:</label>
        <select
          name="department"
          value={department.value}
          onChange={(e) => department.setValue(e.target.value)}
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
