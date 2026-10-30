console.log("===== Question 3: Event Registration Promise =====");

function registerStudent(studentName, seatAvailable) {
    return new Promise(function(resolve, reject) {
        if (seatAvailable) {
            resolve("Registration successful for " + studentName + ". Seat confirmed!");
        } else {
            reject("Registration failed for " + studentName + ". No seats available.");
        }
    });
}

// Test Case 1: Seat available
registerStudent("Ali", true)
    .then(function(message) {
        console.log("Success:", message);
    })
    .catch(function(error) {
        console.log("Error:", error);
    });

// Test Case 2: No seat available
registerStudent("Sara", false)
    .then(function(message) {
        console.log("Success:", message);
    })
    .catch(function(error) {
        console.log("Error:", error);
    });