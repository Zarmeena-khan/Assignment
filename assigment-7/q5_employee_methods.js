console.log("===== Question 5: Employee Object Methods =====");

let employee1 = {
    id: 101,
    firstName: "Ali",
    lastName: "Khan",
    department: "IT",
    designation: "Software Developer",
    salary: 75000,

    getFullName: function() {
        return this.firstName + " " + this.lastName;
    },

    getInfo: function() {
        return "Employee ID " + this.id + " works in " + this.department + " department.";
    }
};

let employee2 = {
    id: 102,
    firstName: "Sara",
    lastName: "Ahmed",
    department: "HR",
    designation: "HR Manager",
    salary: 65000,

    getFullName: function() {
        return this.firstName + " " + this.lastName;
    },

    getInfo: function() {
        return "Employee ID " + this.id + " works in " + this.department + " department.";
    }
};

console.log("Employee 1 Full Name:", employee1.getFullName());
console.log("Employee 1 Info:", employee1.getInfo());

console.log("Employee 2 Full Name:", employee2.getFullName());
console.log("Employee 2 Info:", employee2.getInfo());