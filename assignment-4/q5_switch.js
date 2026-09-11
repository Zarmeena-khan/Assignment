// ========== Menu Selection Using switch ==========

let choice = 2;   // Change this value (1 to 4) to test different options

console.log("Selected Choice:", choice);

switch (choice) {
    case 1:
        console.log("You selected Home");
        break;
    case 2:
        console.log("You selected About");
        break;
    case 3:
        console.log("You selected Services");
        break;
    case 4:
        console.log("You selected Contact");
        break;
    default:
        console.log("Invalid choice");
}