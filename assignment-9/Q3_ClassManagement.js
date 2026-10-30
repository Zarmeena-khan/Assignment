console.log("===== Question 3: Manage Class Lists and Student Profiles =====");

let groupA = ["Ali", "Ahmed", "Hamza"];
let groupB = ["Sara", "Ayesha", "Laiba"];
let profile = { name: "Laiba", className: "Web Development", city: "Karachi" };

console.log("Original Group A:", groupA);
console.log("Original Group B:", groupB);
console.log("Original Profile:", profile);

// Combined class list
let combinedClass = [...groupA, ...groupB];
console.log("Combined class list:", combinedClass);

// Independent copy of Group A
let groupACopy = [...groupA];
groupACopy.push("Bilal");
console.log("Group A Copy (after adding Bilal):", groupACopy);
console.log("Original Group A (unchanged):", groupA);

// Updated profile with city changed to Lahore
let updatedProfile = { ...profile, city: "Lahore" };
console.log("Updated Profile (city = Lahore):", updatedProfile);
console.log("Original Profile (unchanged):", profile);

// Another updated profile with email added
let profileWithEmail = { ...profile, email: "laiba@email.com" };
console.log("Profile with email:", profileWithEmail);