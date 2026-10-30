console.log("===== Question 4: Load Student Records in Sequence =====");

// Sample student data
let students = {
    1: { id: 1, name: "Ali", class: "10th", city: "Lahore" },
    2: { id: 2, name: "Sara", class: "9th", city: "Karachi" },
    3: { id: 3, name: "Ahmed", class: "10th", city: "Islamabad" }
};

function getStudentData(id) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (students[id]) {
                resolve(students[id]);
            } else {
                reject("Student with ID " + id + " not found.");
            }
        }, 2000); // 2 seconds delay
    });
}

// Load students one by one using async/await
async function loadAllStudents() {
    try {
        console.log("Loading Student 1...");
        let student1 = await getStudentData(1);
        console.log("Student 1 Data:", student1);

        console.log("Loading Student 2...");
        let student2 = await getStudentData(2);
        console.log("Student 2 Data:", student2);

        console.log("Loading Student 3...");
        let student3 = await getStudentData(3);
        console.log("Student 3 Data:", student3);

        console.log("All students loaded successfully!");
    } catch (error) {
        console.log("Error:", error);
    }
}

// Comment:
// await pauses only the current async function until the Promise resolves.
// It does not freeze the whole JavaScript program. Other code can still run
// while waiting for the Promise to settle.

loadAllStudents();