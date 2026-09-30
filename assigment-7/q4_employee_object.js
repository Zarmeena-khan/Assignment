console.log("===== Question 4: Employee Record Object =====");

let employee = {
    id: 101,
    firstName: "Ali",
    lastName: "Khan",
    department: "IT",
    designation: "Software Developer",
    salary: 75000
};

console.log("Original employee:", employee);

// Dot notation
console.log("First Name:", employee.firstName);
console.log("Department:", employee.department);

// Bracket notation
console.log("Designation:", employee["designation"]);
console.log("Salary:", employee["salary"]);

// Add new property
employee.email = "ali.khan@company.com";
console.log("After adding email:", employee);

// Change existing property
employee.salary = 80000;
console.log("After updating salary:", employee);

// Remove one property
delete employee.designation;
console.log("After removing designation:", employee);

console.log("Final employee object:", employee);