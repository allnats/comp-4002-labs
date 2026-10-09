import type Department from "../../models/department";

import { useState } from "react";
import type { SubmitEvent } from "react";

import {
  employeeService,
  type validationResponse,
} from "../services/employeeService";

function useFormInput(
  updateEmployeeDept: React.Dispatch<React.SetStateAction<Department[]>>,
) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [department, setDepartment] = useState("");

  function clearFields(): void {
    setFirstName("");
    setLastName("");
    setDepartment("");
  }

  function handleFormSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(`${firstName} ${lastName}`);
    console.log(`Department: ${department}`);

    /** Call Service here to validate the form */
    const validateForm: validationResponse[] = [
      employeeService.validateFirstName(firstName),
      employeeService.validateDeparment(department),
    ];

    // Check the collected validation errors
    if (validateForm.some((validation) => !validation.status)) {
      const error = validateForm.find((validation) => !validation.status);
      alert(error?.message);
      return;
    }

    // This is the block of code to update employees pre lab 3.1
    updateEmployeeDept((currList) =>
      currList.map((d) => {
        if (d.name === department) {
          return { ...d, employees: [...d.employees, { firstName, lastName }] };
        }
        return d;
      }),
    );

    // This this the block of code to update employees in lab 3.1 and after
    employeeService.createEmployee(firstName, lastName, department);
    clearFields();
  }

  return {
    firstName,
    lastName,
    department,
    setFirstName,
    setLastName,
    setDepartment,
    handleFormSubmit,
  };
}

export default useFormInput;
