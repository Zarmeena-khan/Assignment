console.log("===== Question 1: Online Store Sales Report =====");

let orders = [1200, 450, 3000, 750, 1500, 250, 4200, 900];

console.log("Original orders:", orders);

// First order amount greater than 2000
let firstBigOrder = orders.find(function(amount) {
    return amount > 2000;
});
console.log("First order greater than 2000:", firstBigOrder);

// All orders greater than 1000
let bigOrders = orders.filter(function(amount) {
    return amount > 1000;
});
console.log("All orders greater than 1000:", bigOrders);

// Combined total of all order amounts (using arrow function)
let totalSales = orders.reduce((sum, amount) => sum + amount, 0);
console.log("Total of all orders:", totalSales);