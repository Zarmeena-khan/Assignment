// ========== Login Validation ==========

// Predefined correct credentials
let correctUsername = "admin";
let correctPassword = "12345";

// Entered credentials (you can change these to test)
let username = "admin";
let password = "12345";

console.log("Entered Username:", username);
console.log("Entered Password:", password);

if (username === correctUsername && password === correctPassword) {
    console.log("Login Successful");
    // alert("Login Successful");   // uncomment if you want alert
} else {
    console.log("Invalid Username or Password");
    // alert("Invalid Username or Password");
}