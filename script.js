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

const employeeDeptData = [
  {
    department: "Administration",
    employees: ["Zoë Robins", "Madeleine Madden"],
  },
  {
    department: "Audit",
    employees: ["Josha Sadowski", "Kate Fleetwood"],
  },
  {
    department: "Banking Operations",
    employees: [
      "Priyanka Bose",
      "Hammed Animashaun",
      "Álvaro Morte",
      "Taylor Napier",
      "Alan Simmonds",
    ],
  },
  {
    department: "Communications",
    employees: ["Gil Cardinal", "Richard J. Lewis"],
  },
  {
    department: "Corporate Services",
    employees: ["Randy Bradshaw", "Tracey Cook", "Lubomir Mykytiuk"],
  },
  {
    department: "Facilities",
    employees: [
      "Dakota House",
      "Lori Lea Okemah",
      "Renae Morrisseau",
      "Rick Belcourt",
    ],
  },
  {
    department: "Financial Services",
    employees: [
      "Selina Hanusa",
      "Buffy Gaudry",
      "Shaneen Ann Fox",
      "Allan Little",
      "Danny Rabbit",
    ],
  },
  {
    department: "Human Resources",
    employees: [
      "Jesse Ed Azure",
      "Stacy Da Silva",
      "Vladimír Valenta",
      "Samone Sayeses-Whitney",
      "Paul Coeur",
    ],
  },
  {
    department: "IT Technician",
    employees: [
      "Aiyana Littlebear",
      "Inara Thunderbird",
      "Kaya Runningbrook",
      "Elara Firehawk",
      "Siona Moonflower",
      "Kaiyu Greywolf",
      "Ayawamat Nightwind",
      "Tala Braveheart",
      "Iniko Stonebear",
      "Onatah Redhawk",
    ],
  },
  {
    department: "Information Technology",
    employees: ["Graham Greene", "Sandika Evergreen", "Jennifer Rodriguez"],
  },
];

/**
 * DEPRACATED: replaced with department cards.
 * Dynamically adds data to the table-employee-dept table.
 * @param {*} tableData
 */
const populateTable = (tableData) => {
  const table = document.getElementById("table-employee-dept");

  tableData.forEach((data) => {
    const tableRow = document.createElement("tr");
    const newEmployee = document.createElement("td");
    const newDepartment = document.createElement("td");
    newEmployee.innerHTML = data.name;
    newDepartment.innerHTML = data.department;

    // Append data
    tableRow.appendChild(newEmployee);
    tableRow.append(newDepartment);
    table.appendChild(tableRow);
  });
};

const populateDepartmentCards = () => {
  const container = document.querySelector(".container-employee-dept");

  employeeDeptData.forEach((data) => {
    const departmentSection = document.createElement("article");
    const departmentName = document.createElement("h2");
    departmentName.innerHTML = data.department;
    const employeeList = document.createElement("ul");

    for (const employee of data.employees) {
      const employeeName = document.createElement("li");
      employeeName.innerHTML = employee;
      employeeList.appendChild(employeeName);
    }

    departmentSection.appendChild(departmentName);
    departmentSection.appendChild(employeeList);
    container.appendChild(departmentSection);
  });
};

/**
 * Dynamically update the copyright year.
 */
const updateCopyrightYear = () => {
  const copyrightYear = document.querySelector(".copyright-year");
  copyrightYear.innerHTML = new Date().getFullYear();
};

// Add data
// populateTable(tableData);
populateDepartmentCards();
updateCopyrightYear();
