import type { SubmitEvent } from "react";

function EmployeeForm() {
  return <form onSubmit={handleFormSubmit}></form>;
}

function handleFormSubmit(e: SubmitEvent<HTMLFormElement>) {
  e.preventDefault();
}

export default EmployeeForm;
