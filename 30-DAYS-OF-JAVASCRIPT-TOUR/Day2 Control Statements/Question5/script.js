// JavaScript for Question 5
//`e. Write a program to enter a number and find the reverse of that number. Also display the double of the reverse.`

let number = parseInt(prompt("Enter a number:"));
let dubnumber = number;
let reverse = 0;

while (number > 0) {
    let remainder = number % 10;
    reverse = reverse * 10 + remainder;
    number = Math.floor(number / 10);
    // console.log(reverse);
    // console.log(number);
}

let doubleReverse = reverse * 2;

console.log(`The reverse of ${dubnumber} is ${reverse}.`); 