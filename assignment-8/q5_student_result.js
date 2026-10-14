console.log("===== Question 5: Student Result Object =====");

// First student object
let student1 = {
    name: "Ali Khan",
    class: "10th",
    chemistry: 85,
    mathematics: 90,
    urdu: 78,
    english: 88,

    // Method using this
    getResult: function() {
        let total = this.chemistry + this.mathematics + this.urdu + this.english;
        let percentage = (total / 400) * 100;
        return this.name + " scored " + percentage.toFixed(2) + "%";
    }
};

// Display name and class
console.log("Student Name:", student1.name);
console.log("Class:", student1.class);

// Access property using bracket notation
console.log("Mathematics marks:", student1["mathematics"]);

// Call the method
console.log(student1.getResult());

// Second student object (to show reusability)
let student2 = {
    name: "Sara Ahmed",
    class: "10th",
    chemistry: 92,
    mathematics: 88,
    urdu: 85,
    english: 90,

    getResult: function() {
        let total = this.chemistry + this.mathematics + this.urdu + this.english;
        let percentage = (total / 400) * 100;
        return this.name + " scored " + percentage.toFixed(2) + "%";
    }
};

console.log(student2.getResult());

// Remove one property
delete student1.urdu;
console.log("After removing urdu from student1:", student1);