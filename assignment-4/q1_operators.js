// ========== Arithmetic Operators ==========
let num1 = 20;
let num2 = 5;

console.log("===== Arithmetic Operators =====");
console.log("num1 =", num1);
console.log("num2 =", num2);
console.log("Addition (num1 + num2):", num1 + num2);
console.log("Subtraction (num1 - num2):", num1 - num2);
console.log("Multiplication (num1 * num2):", num1 * num2);
console.log("Division (num1 / num2):", num1 / num2);
console.log("Modulus (num1 % num2):", num1 % num2);

// Increment
num1++;
console.log("After Increment (num1++):", num1);

// Decrement
num2--;
console.log("After Decrement (num2--):", num2);


// ========== Assignment Operators ==========
console.log("\n===== Assignment Operators =====");
let value = 10;
console.log("Initial value =", value);

value += 5;   // value = value + 5
console.log("After += 5:", value);

value -= 3;   // value = value - 3
console.log("After -= 3:", value);

value *= 2;   // value = value * 2
console.log("After *= 2:", value);

value /= 4;   // value = value / 4
console.log("After /= 4:", value);


// ========== Comparison Operators ==========
console.log("\n===== Comparison Operators =====");
let a = 10;
let b = "10";
let c = 20;

console.log("a == b  (10 == '10'):", a == b);      // true (value same)
console.log("a === b (10 === '10'):", a === b);    // false (type different)
console.log("a != b:", a != b);                    // false
console.log("a !== b:", a !== b);                  // true
console.log("a > c:", a > c);                      // false
console.log("a < c:", a < c);                      // true
console.log("a >= 10:", a >= 10);                  // true
console.log("c <= 15:", c <= 15);                  // false