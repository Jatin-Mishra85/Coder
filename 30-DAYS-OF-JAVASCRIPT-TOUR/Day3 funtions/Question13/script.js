// JavaScript for Question 13
// write a function that accepts a character, if the character is a lower case alphabet its uppercase letter should be returned and if the character is an uppercase letter its lowercase letter should be returned.

function swapCase(char) {
    let code = char.charCodeAt(0);

    // Convert lowercase to uppercase
    if (code >= 97 && code <= 122) {
        return String.fromCharCode(code - 32);
    }

    // Convert uppercase to lowercase
    if (code >= 65 && code <= 90) {
        return String.fromCharCode(code + 32);
    }

    // Return the same character if it's not an alphabet
    return char;
}

// Test Cases
console.log(swapCase('a')); // Output: A
console.log(swapCase('Z')); // Output: z
console.log(swapCase('G')); // Output: g
console.log(swapCase('m')); // Output: M
console.log(swapCase('5')); // Output: 5 (remains the same)
console.log(swapCase('@')); // Output: @ (remains the same)
