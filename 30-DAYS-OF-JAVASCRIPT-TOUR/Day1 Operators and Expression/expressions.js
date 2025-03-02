//expression 
// 1️⃣ Arithmetic Expressions 
let a = 10, b = 5;
let sum = a + b; // 10 + 5 = 15
let product = a * b; // 10 * 5 = 50
let power = a ** b; // 10^5 = 100000

// 2️⃣ Assignment Expressions 
a += 5;  // a = a + 5 → 15
b *= 2;  // b = b * 2 → 10

// 3️⃣ Comparison Expressions (तुलना 
let isGreater = (a > b); // true (15 > 10)
let isEqual = (a == 15); // true

// 4️⃣ Logical Expressions 
let logicAnd = isGreater && isEqual; // true && true → true
let logicOr = isGreater || (b < 5);  // true || false → true

// 5️⃣ String Expressions 
let firstName = "Jatin";
let lastName = "Mishra";
let fullName = firstName + " " + lastName; // "Jatin Mishra"

// 6️⃣ Function Expression 
let square = function(x) { return x * x; };
let squaredValue = square(4); // 16

// 7️⃣ Ternary Expression 
let age = 20;
let canVote = (age >= 18) ? "Eligible" : "Not Eligible"; // "Eligible"

// 8️⃣ Array Expression 
let numbers = [sum, product, power, squaredValue]; // [15, 50, 100000, 16]

// 9️⃣ Object Expression 
let person = {
    name: fullName,
    age: age,
    canVote: canVote
};

// 🔟 Printing All Expressions
console.log("Arithmetic Expressions: ", sum, product, power);
console.log("Assignment Expressions: ", a, b);
console.log("Comparison Expressions: ", isGreater, isEqual);
console.log("Logical Expressions: ", logicAnd, logicOr);
console.log("String Expression: ", fullName);
console.log("Function Expression (Square of 4): ", squaredValue);
console.log("Ternary Expression (Voting Eligibility): ", canVote);
console.log("Array Expression: ", numbers);
console.log("Object Expression: ", person);
