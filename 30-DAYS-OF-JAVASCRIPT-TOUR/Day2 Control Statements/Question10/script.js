// JavaScript for Question 10
//`j.  write a program to accept any number N and print the sum of square of all number from 1 to N.`

let number = parseInt(prompt("Enter a number:"));
let dubnumber = number;
let sum = 0;

for (let i = 1; i <= number; i++) {
    sum += i * i;
    // console.log(sum);        
}

console.log(`The sum of square of all numbers from 1 to ${dubnumber} is ${sum}.`);