interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const styles = `
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
    font-size: 18px;
    text-align: left;
  }
  th, td {
    padding: 12px;
    border-bottom: 1px solid #ddd;
  }
  th {
    background-color: #f4f4f4;
  }
  tr:hover {
    background-color: #f1f1f1;
  }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

const student1: Student = {
  firstName: "Alexander",
  lastName: "Hamilton",
  age: 20,
  location: "New York"
};

const student2: Student = {
  firstName: "Hiba",
  lastName: "Alaeldin",
  age: 27,
  location: "Khartoum"
};

const studentsList: Student[] = [student1, student2];

function renderStudentsTable(students: Student[]): void {
  const table = document.createElement('table');
  const headerRow = document.createElement('tr');
  const headerFirstName = document.createElement('th');
  headerFirstName.textContent = 'First Name';
  const headerLocation = document.createElement('th');
  headerLocation.textContent = 'Location';
  headerRow.appendChild(headerFirstName);
  headerRow.appendChild(headerLocation);
  table.appendChild(headerRow);
  
  students.forEach(student => {
    const row = document.createElement('tr');
    const cellFirstName = document.createElement('td');
    cellFirstName.textContent = student.firstName;
    const cellLocation = document.createElement('td');
    cellLocation.textContent = student.location;
    row.appendChild(cellFirstName);
    row.appendChild(cellLocation);
    table.appendChild(row);
  });

  document.body.appendChild(table);
}

renderStudentsTable(studentsList);
