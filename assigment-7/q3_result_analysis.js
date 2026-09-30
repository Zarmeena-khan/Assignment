console.log("===== Question 3: Class Result Analysis =====");

let marks1 = [78, 45, 92, 66, 88, 54, 91, 73];
let marks2 = [60, 85, 70];

console.log("First group:", marks1);
console.log("Second group:", marks2);

// Combine both groups
let allMarks = marks1.concat(marks2);
console.log("Combined marks:", allMarks);

// Smaller list
let selectedMarks = allMarks.slice(2, 7);
console.log("Selected portion:", selectedMarks);

// Change one mark in the middle
allMarks.splice(4, 1, 80);
console.log("After changing middle mark:", allMarks);

// Total number of marks
console.log("Total marks stored:", allMarks.length);

// Lowest to highest
let sortedMarks = allMarks.slice().sort(function(a, b) {
    return a - b;
});
console.log("Sorted (lowest to highest):", sortedMarks);

// Reverse
let reversedMarks = sortedMarks.slice().reverse();
console.log("Reversed sorted list:", reversedMarks);

// Arrow function
const showMarks = (arr) => {
    console.log("Final marks by arrow function:", arr);
};

showMarks(reversedMarks);