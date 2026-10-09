import type Department from "../../models/department";

import { useState } from "react";
import type { SubmitEvent } from "react";

type useFormInputProps = {
  departmentList: string[];
  updateEmployeeDept: React.Dispatch<React.SetStateAction<Department[]>>;
};

function useFormInput({
  departmentList,
  updateEmployeeDept,
}: useFormInputProps) {
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

    // Validation here
    if (firstName.length < 3 || !departmentList.includes(department)) {
      alert("Invalid form");
      clearFields();
      return;
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

  return {
    setFirstName,
    setLastName,
    setDepartment,
    handleFormSubmit,
  };
}

export default useFormInput;
