// JavaScript for Question 3
//`c. Write a program to enter 10 numbers ranging from 1 to 50 and draw a histogram by displaying adjacent '=' sign for each number entered. `
let numbers = [];
for (let i = 0; i < 10; i++) {
    let number = parseInt(prompt(`Enter number ${i + 1} (between 1 and 50):`));
    
    while (isNaN(number) || number < 1 || number > 50) {
        console.log('Please enter a valid number between 1 and 50.');
        number = parseInt(prompt(`Enter number ${i + 1} (between 1 and 50):`));
    }
    
    numbers.push(number);
}

console.log("\nHistogram:");
for (let i = 0; i < numbers.length; i++) {
    let histogram = "";  // Reset the histogram for each number
    for (let j = 0; j < numbers[i]; j++) {
        histogram += "=";
    }
    console.log(histogram);
}
