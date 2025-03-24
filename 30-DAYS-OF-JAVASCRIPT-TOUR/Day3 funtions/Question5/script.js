// JavaScript for Question 5
// write a function sumPdivisor() that find the sum of a proper divisor of a number. proper divisor of a number are those number by which number is divisible. except number itself.

function sumPdivisor(number) {
    let sum = 0;
    for (let i = 1; i <= number/2; i++) {
        if (number % i === 0) {
            sum += i;
            console.log(sum , i);
        }
    }
    return sum;
}
console.log('The sum of proper divisors of 28 is: ' + sumPdivisor(28));