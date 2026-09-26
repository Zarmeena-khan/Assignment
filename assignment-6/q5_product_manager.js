console.log("===== Question 5: Product List Manager =====");

// Starting data
let products = ["Laptop", "Mouse", "Keyboard", "Monitor", "Headphones"];
console.log("Original products:", products);

// Display number of products
console.log("Number of products:", products.length);

// First and last product using at()
console.log("First product:", products.at(0));
console.log("Last product:", products.at(products.length - 1));

// Add product using push()
products.push("Webcam");
console.log("After push('Webcam'):", products);

// Add product using unshift()
products.unshift("Speaker");
console.log("After unshift('Speaker'):", products);

// Remove last product using pop()
let removedLast = products.pop();
console.log("Removed with pop():", removedLast);
console.log("After pop():", products);

// Remove first product using shift()
let removedFirst = products.shift();
console.log("Removed with shift():", removedFirst);
console.log("After shift():", products);

// Create second array and combine using concat()
let moreProducts = ["USB Cable", "Charger"];
let allProducts = products.concat(moreProducts);
console.log("After concat():", allProducts);

// Use slice() to create a smaller list
let smallList = allProducts.slice(0, 3);
console.log("After slice(0, 3):", smallList);

// Use splice() to replace or remove a product
allProducts.splice(1, 1, "Wireless Mouse");  // remove 1 at index 1, add new
console.log("After splice (replace):", allProducts);

// Use join() to display final list as string
console.log("Final list as string:", allProducts.join(" | "));

// Arrow function to display the final array
const displayFinal = (arr) => {
    console.log("Final array by arrow function:", arr);
};
displayFinal(allProducts);

// Array.isArray() to verify
console.log("Is final product list an array?", Array.isArray(allProducts));