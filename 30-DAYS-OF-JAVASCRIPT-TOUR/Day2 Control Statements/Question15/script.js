// JavaScript for Question 15
// `o. Write a program that inputs an integer and display N-by-N checkboard pattern if the value of N is 5 the pattern would be.`
// (

//     * * * * *
//     * * * * *
//     * * * * *
//     * * * * *
//     * * * * *
//     * * * * *
// )

let number = parseInt(prompt("Enter a number:"));
let dubnumber = number;
let symbol = "";

for (let i = 1; i <= number; i++) {
    for (let j = 1; j <= number; j++) {
            symbol+=`*` + " \t";
    }
    symbol+=`\n`;
        }

console.log(symbol);