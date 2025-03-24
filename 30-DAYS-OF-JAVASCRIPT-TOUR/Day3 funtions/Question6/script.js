// JavaScript for Question 6
// a number is called perfect number if the sum of proper divisors of that number is equal to the number itself. write a function that inputs a number and check whether it is a perfect number or not.

function isPerfectNumber(number) {
    let sum = 0;
    for (let i = 1; i <= number/2; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }
    return sum === number;
}
console.log(isPerfectNumber(28));