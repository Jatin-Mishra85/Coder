// JavaScript for Question 3
// write a function proddigits() thats input a number and product their digits of that number.

function proddigits(number) {
    let product = 1;
    while (number > 0) {
        let digit = number % 10;
        product *= digit;
        number = Math.floor(number / 10);
    }
    return product;
}  
console.log(proddigits(256))