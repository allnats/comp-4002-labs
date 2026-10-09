import type Department from "../models/department";
import useFormInput from "./hooks/useFormInput";

type EmployeeFormProps = {
  departmentList: string[];
  updateEmployeeDept: React.Dispatch<React.SetStateAction<Department[]>>;
};

function EmployeeForm({
  departmentList,
  updateEmployeeDept,
}: EmployeeFormProps) {
  const {
    firstName,
    lastName,
    department,
    setFirstName,
    setLastName,
    setDepartment,
    handleFormSubmit,
  } = useFormInput(updateEmployeeDept);

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
