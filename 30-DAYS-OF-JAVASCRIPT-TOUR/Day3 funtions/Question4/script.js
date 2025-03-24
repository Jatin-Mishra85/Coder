// JavaScript for Question 4
// if all the digis of a number n is multiply by each other repeating  with the product, the one digit number obtain at last is called the multiplicative digit root of n. the number of time digits need to be multiplied to get the multiplicative digit root is called the multiplicative persistence of n. write a function that inputs a number and return the multiplicative persistence of that number.

function multiplicativePersistence(number) {
    let persistence = 0;
    while (number > 9) {
        let product = 1;
        while (number > 0) {
            let digit = number % 10;
            product *= digit;
            number = Math.floor(number / 10);
        }
        number = product;
        persistence++;
    }
    return [number, persistence]; // Return both the number and persistence;
}

console.log(multiplicativePersistence(39)); // Output: 2
console.log(multiplicativePersistence(32)); // Output: 0