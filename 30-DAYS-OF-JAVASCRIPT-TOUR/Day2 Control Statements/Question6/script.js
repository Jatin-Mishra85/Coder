// JavaScript for Question 6
//`f. write a program to find whether a number is palindrome or not.`

let num = 12321;
let temp = num; 
let reverse = 0;

while (temp > 0) {
    let remainder = temp % 10;
    reverse = reverse * 10 + remainder;
    temp = Math.floor(temp / 10);
    // console.log(reverse);
    // console.log(temp);
}

if (num === reverse) {
    console.log(`${num} is a palindrome.`);
} else {
    console.log(`${num} is not a palindrome.`); 
}