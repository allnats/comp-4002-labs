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

const tableData = [
  {
    name: "Zoë Robins",
    department: "Administration",
  },
  {
    name: "Madeleine Madden",
    department: "Administration",
  },
  {
    name: "Josha Sadowski",
    department: "Audit",
  },
  {
    name: "Kate Fleetwood",
    department: "Audit",
  },
  {
    name: "Priyanka Bose",
    department: "Banking Operations",
  },
  {
    name: "Hammed Animashaun",
    department: "Banking Operations",
  },
  {
    name: "Álvaro Morte",
    department: "Banking Operations",
  },
  {
    name: "Taylor Napier",
    department: "Banking Operations",
  },
  {
    name: "Alan Simmonds",
    department: "Banking Operations",
  },
  {
    name: "Gil Cardinal",
    department: "Communications",
  },
  {
    name: "Richard J. Lewis",
    department: "Communications",
  },
  {
    name: "Randy Bradshaw",
    department: "Corporate Services",
  },
  {
    name: "Tracey Cook",
    department: "Corporate Services",
  },
  {
    name: "Lubomir Mykytiuk",
    department: "Corporate Services",
  },
  {
    name: "Dakota House",
    department: "Facilities",
  },
  {
    name: "Lori Lea Okemah",
    department: "Facilities",
  },
  {
    name: "Renae Morrisseau",
    department: "Facilities",
  },
  {
    name: "Rick Belcourt",
    department: "Facilities",
  },
  {
    name: "Selina Hanusa",
    department: "Financial Services",
  },
  {
    name: "Buffy Gaudry",
    department: "Financial Services",
  },
  {
    name: "Shaneen Ann Fox",
    department: "Financial Services",
  },
  {
    name: "Allan Little",
    department: "Financial Services",
  },
  {
    name: "Danny Rabbit",
    department: "Financial Services",
  },
  {
    name: "Jesse Ed Azure",
    department: "Human Resources",
  },
  {
    name: "Stacy Da Silva",
    department: "Human Resources",
  },
  {
    name: "Vladimír Valenta",
    department: "Human Resources",
  },
  {
    name: "Samone Sayeses-Whitney",
    department: "Human Resources",
  },
  {
    name: "Paul Coeur",
    department: "Human Resources",
  },
  {
    name: "Graham Greene",
    department: "Information Technology",
  },
  {
    name: "Sandika Evergreen",
    department: "Information Technology",
  },
  {
    name: "Jennifer Rodriguez",
    department: "Information Technology",
  },
  {
    name: "Aiyana Littlebear",
    department: "IT Technician",
  },
  {
    name: "Inara Thunderbird",
    department: "IT Technician",
  },
  {
    name: "Kaya Runningbrook",
    department: "IT Technician",
  },
  {
    name: "Elara Firehawk",
    department: "IT Technician",
  },
  {
    name: "Siona Moonflower",
    department: "IT Technician",
  },
  {
    name: "Kaiyu Greywolf",
    department: "IT Technician",
  },
  {
    name: "Ayawamat Nightwind",
    department: "IT Technician",
  },
  {
    name: "Tala Braveheart",
    department: "IT Technician",
  },
  {
    name: "Iniko Stonebear",
    department: "IT Technician",
  },
  {
    name: "Onatah Redhawk",
    department: "IT Technician",
  },
];

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

populateTable(tableData);
