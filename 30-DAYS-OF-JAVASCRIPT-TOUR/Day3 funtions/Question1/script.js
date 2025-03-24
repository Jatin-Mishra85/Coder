// JavaScript for Question 1
// write a function that inputs a number and print the multiplication table of that number.

function printMultiplicationTable(number) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}

printMultiplicationTable(5); // Example usage