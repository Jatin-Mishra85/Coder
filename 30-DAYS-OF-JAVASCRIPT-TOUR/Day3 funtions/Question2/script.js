// JavaScript for Question 2
// write a function cubeSum() that accepts an integer and return a sum of the cube of the individual digits of that number. Use this function and make a function printArmstrong() and isarmstrong() to print Armstrong number .

function cubeSum(num) {
    let sum = 0;
    while (num > 0) {
        let rem = num % 10;
        sum += rem * rem * rem;
        num = Math.floor(num / 10);
    }
    return sum;
}

function isArmstrong(num) {
    if (num === cubeSum(num)) {
        return true;
    } else {
        return false;
    }
}

// Calling functions and printing results
console.log(cubeSum(153));  // Output: 333 (2³ + 5³ + 6³)
console.log(isArmstrong(153)); // Output: false (256 is not an Armstrong number)
