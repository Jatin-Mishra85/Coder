// JavaScript for Question 4
//`d. Write a program to print or prime numbers from one to 99.`
for (let num = 2; num < 100; num++) {
    let isPrime = 1; // Assume it's prime

    // Check divisibility from 2 to num-1
    for (let i = 2; i * i <= num; i++) { 
        if (num % i === 0) {
            isPrime = 0; // Not a prime
            break; 
        }
    }

    if (isPrime === 1) {
        console.log(num); // Print prime number
    }
}
