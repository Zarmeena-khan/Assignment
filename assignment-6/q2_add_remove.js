// Create an array named students
let students = ["Ali", "Sara", "Ahmed", "Fatima", "Hassan"];

console.log("===== Question 2: Adding and Removing =====");
console.log("Original array:", students);

// push() - add to end
students.push("Zainab");
console.log("After push('Zainab'):", students);

// pop() - remove last and show removed value
let removedLast = students.pop();
console.log("Removed with pop():", removedLast);
console.log("After pop():", students);

// unshift() - add to beginning
students.unshift("Omar");
console.log("After unshift('Omar'):", students);

// shift() - remove first and show removed value
let removedFirst = students.shift();
console.log("Removed with shift():", removedFirst);
console.log("After shift():", students);

// Final length
console.log("Final number of students:", students.length);