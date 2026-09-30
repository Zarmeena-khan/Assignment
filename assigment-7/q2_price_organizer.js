console.log("===== Question 2: Product Price Organizer =====");

let prices = [1200, 450, 3000, 750, 1500, 250];

console.log("Original prices:", prices);

// Lowest to highest
let ascending = prices.slice().sort(function(a, b) {
    return a - b;
});
console.log("Lowest to Highest:", ascending);

// Highest to lowest
let descending = prices.slice().sort(function(a, b) {
    return b - a;
});
console.log("Highest to Lowest:", descending);

// Original and reversed
console.log("Original list:", prices);
let reversed = prices.slice().reverse();
console.log("Reversed list:", reversed);

// Random ordering
let randomOrder = prices.slice().sort(function() {
    return Math.random() - 0.5;
});
console.log("Random promotional order:", randomOrder);