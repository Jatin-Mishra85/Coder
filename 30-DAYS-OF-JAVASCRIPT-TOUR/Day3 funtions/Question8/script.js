// JavaScript for Question 8
//write a single function to print both the amicable pair and perfect pair

function findAmicableAndPerfectNumbers(rangeStart, rangeEnd) {
    function sumOfDivisors(num) {
        let sum = 0;
        for (let i = 1; i <= num / 2; i++) { // Finding sum of proper divisors
            if (num % i === 0) {
                sum += i;
            }
        }
        return sum;
    }

    let amicablePairs = [];
    let perfectNumbers = [];

    for (let num1 = rangeStart; num1 <= rangeEnd; num1++) {
        let sum1 = sumOfDivisors(num1);

        // Check if it's a Perfect Number
        if (sum1 === num1) {
            perfectNumbers.push(num1);
        }

        // Check for Amicable Pairs
        if (sum1 > num1 && sum1 <= rangeEnd) {
            let sum2 = sumOfDivisors(sum1);
            if (sum2 === num1) {
                amicablePairs.push([num1, sum1]);
            }
        }
    }

    console.log("Perfect Numbers:", perfectNumbers);
    console.log("Amicable Pairs:", amicablePairs);
}

// Example Usage:
let rangeStart = 1, rangeEnd = 10000;
findAmicableAndPerfectNumbers(rangeStart, rangeEnd);
