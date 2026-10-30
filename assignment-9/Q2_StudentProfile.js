console.log("===== Question 2: Student Profile from an API =====");

let studentProfile = {
    name: "Sara Ahmed",
    age: 19,
    department: "Software Engineering",
    address: {
        city: "Karachi",
        country: "Pakistan"
    }
};

// Extract name and age
let { name, age } = studentProfile;

// Rename department to program
let { department: program } = studentProfile;

// Extract nested city and country
let { address: { city, country } } = studentProfile;

// Phone with default value
let { phone = "Not provided" } = studentProfile;

// Profile summary
console.log(`Name: ${name}`);
console.log(`Program: ${program}`);
console.log(`City: ${city}`);
console.log(`Phone: ${phone}`);
console.log(`Age: ${age}, Country: ${country}`);