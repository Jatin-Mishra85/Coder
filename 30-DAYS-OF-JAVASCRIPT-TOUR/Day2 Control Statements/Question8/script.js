// JavaScript for Question 8
//`h. Write a program to display all four digit palindromes.`

for (let num = 1000; num <= 9999; num++) {
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
        console.log(num);
        // console.log("Palindrome");
    }
    }
    