function OrganizationForm() {
  return (
    <form action="">
      <fieldset>
        <legend>Add a new Employee</legend>

        {/* First name Input field */}
        <label htmlFor="fname">First Name</label>
        <input type="text" name="fname" />

        {/* Last name Input field */}
        <label htmlFor="lname">Last Name</label>
        <input type="text" name="lname" />

        {/* Role field */}
        <label htmlFor="role">Role</label>
        <input type="text" name="role" />

        <button type="submit">Submit form</button>
      </fieldset>
    </form>
  );
}

export default OrganizationForm;
