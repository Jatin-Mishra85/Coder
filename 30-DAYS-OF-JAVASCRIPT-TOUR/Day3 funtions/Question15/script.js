// JavaScript for Question 15
// Write a program to print twin prime less than 1000.If two consecutive odd number are both primethen they are also known as twin primes
// Function to check if a number is prime
function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

// Function to find twin primes
function findTwinPrimes(limit) {
    for (let i = 2; i <= limit - 2; i++) {
        if (isPrime(i) && isPrime(i + 2)) {
            console.log(`(${i}, ${i + 2})`);
        }
    }
}

// Print twin primes less than 1000
console.log("Twin Primes less than 1000:");
findTwinPrimes(1000);
