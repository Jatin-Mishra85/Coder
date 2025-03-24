function product(a, b) {
    let isNegative = false;
    let result = 0;

    if (b < 0) {
        isNegative = !isNegative;
        b = -b;
    }
    if (a < 0) {
        isNegative = !isNegative;
        a = -a;
    }

    while (b > 0) {
        result += a;
        b--;
    }

    return isNegative ? -result : result;
}

function Quotient(a, b) {
    let isNegative = false;
    let quotient = 0;

    if (b < 0) {
        isNegative = !isNegative;
        b = -b;
    }
    if (a < 0) {
        isNegative = !isNegative;
        a = -a;
    }

    while (a >= b) {
        a -= b;
        quotient++;
    }

    return isNegative ? -quotient : quotient;
}

function remainder(a, b) {
    if (b === 0) return undefined; // Division by zero case

    let isNegative = false;

    if (b < 0) {
        b = -b;
    }
    if (a < 0) {
        isNegative = !isNegative;
        a = -a;
    }

    while (a >= b) {
        a -= b;
    }

    return isNegative ? -a : a;
}

// Test Cases
console.log(`Product: ${product(12, -6)}`);     // -72
console.log(`Quotient: ${Quotient(12, -6)}`);   // -2
console.log(`Remainder: ${remainder(13, -6)}`); // 1
