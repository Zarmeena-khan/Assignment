console.log("===== Question 1: Library Book Record =====");

// Original sample record
let bookRecord = ["BK-104", "JavaScript for Beginners", "Programming", 1200];

// Extract book ID, title, and price (ignore category)
let [bookId, bookTitle, , price] = bookRecord;

console.log(`Book ${bookId}: "${bookTitle}" costs Rs. ${price}`);

// Shorter record without category
let shortRecord = ["BK-105", "Learning ES6"];

// Extract with default value for category
let [id2, title2, category = "General"] = shortRecord;

console.log(`Book ${id2}: "${title2}" | Category: ${category}`);

// Original arrays remain unchanged
console.log("Original bookRecord:", bookRecord);
console.log("Original shortRecord:", shortRecord);