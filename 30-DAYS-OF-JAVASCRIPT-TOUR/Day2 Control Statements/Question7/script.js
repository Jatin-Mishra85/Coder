// JavaScript for Question 7
//`g. Write a program to input a number and count the digit in it. Use while loop and the four programs should work correctly for 0 also.`
let number = parseInt(prompt("Enter a number:"));
let dubnumber = number;
let count = 0;

// Handle case where input is 0
if (number === 0) {
  count = 1;
} else {
  while (number > 0) {
    number = Math.floor(number / 10);
    count++;
  }
}

console.log(`The number of digits in ${dubnumber} is ${count}.`);
