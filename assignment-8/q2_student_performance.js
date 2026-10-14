console.log("===== Question 2: Student Performance Analyzer =====");

let marks = [45, 78, 92, 61, 88, 54, 73, 95];

console.log("Original marks:", marks);

// Every mark increased by 5 (using map + arrow function)
let practiceMarks = marks.map(mark => mark + 5);
console.log("Marks increased by 5:", practiceMarks);

// Students with marks 70 or above
let goodMarks = marks.filter(mark => mark >= 70);
console.log("Marks 70 or above:", goodMarks);

// First mark greater than 90
let firstHigh = marks.find(mark => mark > 90);
console.log("First mark greater than 90:", firstHigh);

// Total of all original marks
let totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
console.log("Total of original marks:", totalMarks);

console.log("Original marks still unchanged:", marks);