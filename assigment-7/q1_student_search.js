console.log("===== Question 1: Student Search System =====");

let students = ["Ali", "Sara", "Ahmed", "Ayesha", "Hamza", "Sara", "Bilal"];

console.log("Class List:", students);

// Check whether Ayesha is present
console.log("Is Ayesha present?", students.includes("Ayesha"));

// First occurrence of Sara
console.log("First position of Sara:", students.indexOf("Sara"));

// Last occurrence of Sara
console.log("Last position of Sara:", students.lastIndexOf("Sara"));

// First student whose name starts with A
let firstA = students.find(function(name) {
    return name.startsWith("A");
});
console.log("First student starting with A:", firstA);

// Position of that student
let firstAIndex = students.findIndex(function(name) {
    return name.startsWith("A");
});
console.log("Position of first student starting with A:", firstAIndex);

// Last student starting with A and its position
let lastA = null;
let lastAIndex = -1;

for (let i = students.length - 1; i >= 0; i--) {
    if (students[i].startsWith("A")) {
        lastA = students[i];
        lastAIndex = i;
        break;
    }
}

console.log("Last student starting with A:", lastA);
console.log("Position of last student starting with A:", lastAIndex);