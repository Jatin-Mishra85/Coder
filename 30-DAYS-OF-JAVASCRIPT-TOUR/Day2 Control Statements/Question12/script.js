// JavaScript for Question 12
//`l. Write a program to find out the value of X rise to the power Y where X and Y are positive integers.`
let X = parseInt(prompt("Enter base (X):"));
let Y = parseInt(prompt("Enter exponent (Y):"));
let result = 1;

for (let i = 0; i < Y; i++) {
    result *= X;
}

console.log(`${X}^${Y} = ${result}`);
 