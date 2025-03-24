// JavaScript for Question 7
//two different number are called amicable numbers if the sum of the proper divisors of that number is equal to the other number.
// for example 220 and 280 are amicable numbers
// 220 = 1+2+4+5+10+11+20+22+44+55+110 = 284
// 284 = 1+ 2 + 4 +71+142 = 220
//  print amicable numbers in a range

function sumOfDivisors(num) {
    let sum = 0;
    for (let i = 1; i <= num / 2; i++) { // Finding sum of proper divisors
        if (num % i === 0) {
            sum += i;
        }
    }
    return sum;
}

function findAmicableNumbers(rangeStart, rangeEnd) {
    let amicablePairs = [];

    for (let num1 = rangeStart; num1 <= rangeEnd; num1++) {
        let num2 = sumOfDivisors(num1); // Find sum of divisors of num1

        if (num2 > num1 && num2 <= rangeEnd) { // Avoid duplicate pairs and stay within range
            if (sumOfDivisors(num2) === num1) { // Check if num2's divisors sum back to num1
                amicablePairs.push([num1, num2]);
            }
        }
    }

    return amicablePairs;
}

// Example Usage:
let rangeStart = 1, rangeEnd = 10000;
let amicableNumbers = findAmicableNumbers(rangeStart, rangeEnd);
console.log("Amicable pairs in range:", amicableNumbers);
