// JavaScript for Question 11
//`k. Write a program to accept any number and print the cube of all numbers from 1 to N which are divisible by 3 rewrite the program using a continuous statement.`

let number = parseInt(prompt("Enter a number:"));
let dubnumber = number;
let sum = 0;

for (let i = 1; i <= number; i++) {
    if (i % 3 === 0) {
        sum += i * i * i;
        // console.log(sum);        
    }
}

console.log(`The sum of cube of all numbers from 1 to ${dubnumber} divisible by 3 is ${sum}.`);