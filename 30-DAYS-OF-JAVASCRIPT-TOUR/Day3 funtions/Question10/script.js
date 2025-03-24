// JavaScript for Question 10
// using the function sumPrDivisors() in (question 5) write a single line function isprime()containing only a return statement. this function returns 1 is prime otherwise it returns 0.

function sumPrDivisors(num) {
    let sum = 0;
    for (let i = 1; i <= num/2; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    return sum;
}

function isPrime(num) {
    return sumPrDivisors(num) === 1 ? 1 : 0;
}
console.log(isPrime(11));