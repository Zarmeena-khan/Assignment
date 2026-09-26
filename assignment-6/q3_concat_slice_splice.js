console.log("===== Question 3: concat, slice, splice, delete =====");

// Two arrays
let fruits = ["Apple", "Banana", "Mango"];
let vegetables = ["Carrot", "Potato", "Tomato"];

console.log("Fruits:", fruits);
console.log("Vegetables:", vegetables);

// concat() - combine two arrays
let combined = fruits.concat(vegetables);
console.log("After concat():", combined);

// slice() - create a portion of the array
let sliced = combined.slice(1, 4);
console.log("After slice(1, 4):", sliced);

// splice() - remove at least one element
let numbers = [10, 20, 30, 40, 50];
console.log("\nOriginal numbers:", numbers);

numbers.splice(2, 1);   // remove 1 element at index 2
console.log("After splice remove (index 2):", numbers);

// splice() - add at least one element
numbers.splice(1, 0, 25);  // at index 1, remove 0, add 25
console.log("After splice add (index 1):", numbers);

// delete operator
let colors = ["Red", "Green", "Blue", "Yellow"];
console.log("\nOriginal colors:", colors);

delete colors[1];   // delete element at index 1
console.log("After delete colors[1]:", colors);
console.log("Length after delete:", colors.length);
console.log("Note: Position becomes empty/undefined, but length stays the same.");
