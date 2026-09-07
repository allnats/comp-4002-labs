import { tableData } from "./data";

// Deprecated: CORS error when fetching a data locally.
// Replaced with ES Module import (see data.js).
async function loadData() {
  try {
    const res = await fetch("./employee-dept.json");

    if (!res.ok) {
      throw new Error(`JSON not found: ${res.status}`);
    }

    const data = await res.json();

    populateTable(data);
  } catch (err) {
    console.error("Could not load JSON file:", err);
  }
}

const populateTable = (tableData) => {
  const employeeRow = document.getElementById("employee-names");
  const departmentRow = document.getElementById("employee-departments");

  tableData.forEach((data) => {
    const newEmployee = document.createElement("td");
    const newDepartment = document.createElement("td");
    newEmployee.innerHTML = data.name;
    newDepartment.innerHTML = data.department;

    // Append data
    employeeRow.appendChild(newEmployee);
    departmentRow.appendChild(departmentRow);
  });
};

populateTable(tableData);
