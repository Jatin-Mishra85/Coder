// JavaScript for Question 2
//`b. Write a program to input 10 numbers and find the largest number.`

let numbers = [];
for(let i = 0; i < 10; i++){
    numbers.push(parseInt(prompt(`enter number ${i+1}`)));
}

let largestNumber = numbers[0];
for(let i = 1; i < 10; i++){
    if(numbers[i] > largestNumber){
        largestNumber = numbers[i];
    }
}
console.log(`The largest number is ${largestNumber}`);  