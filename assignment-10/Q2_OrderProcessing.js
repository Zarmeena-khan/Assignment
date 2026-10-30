console.log("===== Question 2: Order Processing Sequence =====");

// ========== Version 1: Nested Callbacks (Callback Hell) ==========
console.log("--- Nested Callbacks Version ---");

function prepareOrder(callback) {
    console.log("Preparing order...");
    setTimeout(function() {
        console.log("Order prepared!");
        callback();
    }, 1000);
}

function packOrder(callback) {
    console.log("Packing order...");
    setTimeout(function() {
        console.log("Order packed!");
        callback();
    }, 1000);
}

function notifyCustomer() {
    console.log("Notifying customer...");
    setTimeout(function() {
        console.log("Customer notified!");
    }, 1000);
}

// Nested callbacks
prepareOrder(function() {
    packOrder(function() {
        notifyCustomer();
    });
});

// ========== Version 2: Promises / async-await (Cleaner) ==========
// Comment: Nested callbacks become hard to read (callback hell).
// Promises / async-await make the sequence much clearer and easier to maintain.

function prepareOrderPromise() {
    return new Promise(function(resolve) {
        console.log("Preparing order (Promise)...");
        setTimeout(function() {
            console.log("Order prepared! (Promise)");
            resolve();
        }, 1000);
    });
}

function packOrderPromise() {
    return new Promise(function(resolve) {
        console.log("Packing order (Promise)...");
        setTimeout(function() {
            console.log("Order packed! (Promise)");
            resolve();
        }, 1000);
    });
}

function notifyCustomerPromise() {
    return new Promise(function(resolve) {
        console.log("Notifying customer (Promise)...");
        setTimeout(function() {
            console.log("Customer notified! (Promise)");
            resolve();
        }, 1000);
    });
}

// Using async/await
async function processOrder() {
    console.log("\n--- Promise / async-await Version ---");
    await prepareOrderPromise();
    await packOrderPromise();
    await notifyCustomerPromise();
}

// Uncomment the line below if you want to run the Promise version after nested version finishes
// setTimeout(processOrder, 4000);
processOrder();