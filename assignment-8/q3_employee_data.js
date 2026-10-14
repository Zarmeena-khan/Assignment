console.log("===== Question 3: Employee Data from an API =====");

let employees = [
    { name: "Ali", department: "IT", salary: 80000 },
    { name: "Sara", department: "HR", salary: 70000 },
    { name: "Ahmed", department: "IT", salary: 95000 },
    { name: "Ayesha", department: "Finance", salary: 85000 }
];

console.log("All employees:", employees);

// Employees from IT department
let itEmployees = employees.filter(emp => emp.department === "IT");
console.log("IT Department employees:", itEmployees);

// First employee with salary greater than 90000
let highSalaryEmp = employees.find(emp => emp.salary > 90000);
console.log("First employee with salary > 90000:", highSalaryEmp);

// List of only employee names
let employeeNames = employees.map(emp => emp.name);
console.log("Employee names:", employeeNames);

// Total salary of all employees
let totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);
console.log("Total salary of all employees:", totalSalary);