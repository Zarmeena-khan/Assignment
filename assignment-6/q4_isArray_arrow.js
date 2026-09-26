console.log("===== Question 4: Array.isArray() and Arrow Functions =====");

// Three variables: array, string, number
let myArray = ["HTML", "CSS", "JavaScript"];
let myString = "Hello World";
let myNumber = 100;

// Array.isArray() checks
console.log("Is myArray an array?", Array.isArray(myArray));
console.log("Is myString an array?", Array.isArray(myString));
console.log("Is myNumber an array?", Array.isArray(myNumber));

// Arrow function named showArray
const showArray = (arr) => {
    console.log("Array displayed by arrow function:", arr);
};

// Call the arrow function
showArray(myArray);

// Another simple arrow function that accepts one value
const showValue = (value) => {
    console.log("Value displayed by arrow function:", value);
};

showValue("Learning JavaScript");
showValue(50);