console.log("===== Question 5: Support Ticket Status Checker =====");

// Sample ticket data
let tickets = {
    "T101": { id: "T101", customer: "Ali Khan", status: "Open" },
    "T102": { id: "T102", customer: "Sara Ahmed", status: "In Progress" },
    "T103": { id: "T103", customer: "Ahmed Raza", status: "Resolved" }
};

// Function that simulates retrieving a ticket
function getTicket(ticketId) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (tickets[ticketId]) {
                resolve(tickets[ticketId]);
            } else {
                reject("Ticket ID " + ticketId + " not found. Please check and try again.");
            }
        }, 2000); // 2 seconds delay
    });
}

// Using async/await
async function checkTicket(ticketId) {
    console.log("Loading ticket information for " + ticketId + "...");

    try {
        let ticket = await getTicket(ticketId);
        console.log("----- Ticket Found -----");
        console.log("Ticket ID:", ticket.id);
        console.log("Customer:", ticket.customer);
        console.log("Status:", ticket.status);
    } catch (error) {
        console.log("Error:", error);
    }
}

// Test with a valid ticket
checkTicket("T102");

// Test with an invalid ticket (uncomment to test)
// setTimeout(function() {
//     checkTicket("T999");
// }, 3000);