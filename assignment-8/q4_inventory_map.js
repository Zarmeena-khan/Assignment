console.log("===== Question 4: Store Inventory Using Map =====");

// Create inventory as a Map
let inventory = new Map();
inventory.set("apples", 500);
inventory.set("bananas", 300);
inventory.set("oranges", 200);

console.log("Initial inventory:", inventory);

// Add a new product
inventory.set("mangoes", 150);
console.log("After adding mangoes:", inventory);

// Update quantity of an existing product
inventory.set("bananas", 350);
console.log("After updating bananas quantity:", inventory);

// Retrieve and display quantity of a specific product
console.log("Quantity of apples:", inventory.get("apples"));

// Check whether a product exists
console.log("Does oranges exist?", inventory.has("oranges"));
console.log("Does grapes exist?", inventory.has("grapes"));

// Remove one product
inventory.delete("oranges");
console.log("After removing oranges:", inventory);

// Current number of product entries
console.log("Number of products:", inventory.size);

// Display all product names and quantities
console.log("All product names:", [...inventory.keys()]);
console.log("All quantities:", [...inventory.values()]);

// Map iteration - print each product and quantity
console.log("----- Inventory List -----");
inventory.forEach((quantity, product) => {
    console.log(product + ": " + quantity);
});

// Empty the inventory
inventory.clear();
console.log("After clearing inventory, size:", inventory.size);