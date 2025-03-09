// JavaScript for Question 13
//`m. write a program to enter a number and test whether it is a fabunacci series number or not.`

let number = parseInt(prompt("Enter a number:"));
let dubnumber = number;
let a = 0;
let b = 1;
let sum = 0;

for (let i = 1; i <= number; i++) {
    sum = a + b;
    a = b;
    b = sum;
    // console.log(sum);
    // console.log(a);  console.log(b);
}

if (sum === dubnumber) {
    console.log(`${dubnumber} is a fabunacci series number.`);
} else {
    console.log(`${dubnumber} is not a fabunacci series number.`);  
}