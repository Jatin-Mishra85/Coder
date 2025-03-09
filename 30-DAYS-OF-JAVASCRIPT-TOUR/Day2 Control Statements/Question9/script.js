// JavaScript for Question 9
//`i.  input a number and digit, and count the number of times the digit occurs in the number.`

let number = parseInt(prompt("Enter a number:"));
let digit = parseInt(prompt("Enter a digit:"));
let count = 0;
let dubnumber = number;

while (number > 0) {
    let remainder = number % 10;
    if (remainder === digit) {
        count++;
    }
    number = Math.floor(number / 10);
    // console.log(count);
    // console.log(number); 
}

console.log(`The digit ${digit} occurs ${count} times in ${dubnumber}.`);