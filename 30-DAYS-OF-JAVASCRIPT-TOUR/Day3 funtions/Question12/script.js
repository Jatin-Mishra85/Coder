// JavaScript for Question 12
// write a function to find whether a character is alphanumeric or not
function isAlphanumeric(char) {
    let code = char.charCodeAt(0);

    // Check if it's a digit (0-9) -> ASCII: 48 to 57
    if (code >= 48 && code <= 57) return true;

    // Check if it's an uppercase letter (A-Z) -> ASCII: 65 to 90
    if (code >= 65 && code <= 90) return true;

    // Check if it's a lowercase letter (a-z) -> ASCII: 97 to 122
    if (code >= 97 && code <= 122) return true;

    return false;
}

// Test Cases
console.log(isAlphanumeric('A')); // true
console.log(isAlphanumeric('z')); // true
console.log(isAlphanumeric('5')); // true
console.log(isAlphanumeric('@')); // false
console.log(isAlphanumeric(' ')); // false
