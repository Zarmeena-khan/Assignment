import { courses } from "./courses.js";
import { formatCourseSummary } from "./courseUtils.js";

console.log("===== Question 5: Course Registration Data =====");

// Original courses
console.log("Original courses:", courses);

// Extract name and fee from one course
let { name: courseName, fee: courseFee } = courses[0];
console.log(`Selected Course: ${courseName}, Fee: Rs. ${courseFee}`);

// New list with one additional course (original remains unchanged)
let newCourse = {
    name: "Node.js Backend",
    instructor: "Sir Hamza",
    duration: "2 months",
    fee: 14000
};

let updatedCourseList = [...courses, newCourse];
console.log("Updated course list:", updatedCourseList);
console.log("Original courses (unchanged):", courses);

// Updated version of one course with revised fee
let revisedCourse = { ...courses[1], fee: 13500 };
console.log("Revised JavaScript course:", revisedCourse);
console.log("Original second course (unchanged):", courses[1]);

// Display all course summaries
console.log("----- Course Summaries -----");
updatedCourseList.forEach(function(course) {
    console.log(formatCourseSummary(course));
});