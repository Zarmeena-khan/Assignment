console.log("===== Question 1: Callback-Based Calculator and Bill =====");

// 1. calculate() function
function calculate(num1, num2, callback) {
    callback(num1, num2);
}

// Callback that adds the numbers
calculate(10, 20, function(a, b) {
    let sum = a + b;
    console.log("Sum using calculate():", sum);
});

// 2. calculateBill() function
function calculateBill(price1, price2, price3, callback) {
    callback(price1, price2, price3);
}

// Using prices 200, 300, 500 (total should be 1000)
calculateBill(200, 300, 500, function(p1, p2, p3) {
    let total = p1 + p2 + p3;
    console.log("Bill Total:", total);
});

// 3. withdrawMoney() with delay
function withdrawMoney(amount, callback) {
    let balance = 10000;
    console.log("Withdrawing Rs.", amount + "...");

    setTimeout(function() {
        balance = balance - amount;
        callback(balance);
    }, 2000); // 2 seconds delay
}

// Call withdrawMoney
withdrawMoney(2500, function(remainingBalance) {
    console.log("Remaining Balance:", remainingBalance);
});