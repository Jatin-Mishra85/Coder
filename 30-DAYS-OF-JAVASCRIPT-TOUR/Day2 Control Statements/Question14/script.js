// JavaScript for Question 14
//`n. Write a program to read roll number and marks of 10 students in three subjects. The valid range for roll number is 1000999 9 if the roll number enter is not in the range the user should be asked to enter again. Calculate total marks of only four students who get more than or equal to 40 marks in each subject. Count the number of students whose total is more than 200. The role number of the student who get the highest total.`

let rollNumbers = [];
let marks = [];
let totalMarks = 0;

for (let i = 0; i < 10; i++) {
    let rollNumber = parseInt(prompt(`Enter roll number for student ${i + 1}:`));

    while (isNaN(rollNumber) || rollNumber < 1000000 || rollNumber > 9999999) {
        console.log('Please enter a valid roll number (between 1000000 and 9999999).');
        rollNumber = parseInt(prompt(`Enter roll number for student ${i + 1}:`));
    }

    rollNumbers.push(rollNumber);

    let mark1 = parseInt(prompt(`Enter marks for subject 1 for student ${i + 1}:`));
    let mark2 = parseInt(prompt(`Enter marks for subject 2 for student ${i + 1}:`));
    let mark3 = parseInt(prompt(`Enter marks for subject 3 for student ${i + 1}:`));    

    while (isNaN(mark1) || mark1 < 0 || mark1 > 100 || isNaN(mark2) || mark2 < 0 || mark2 > 100 || isNaN(mark3) || mark3 < 0 || mark3 > 100) {
        console.log('Please enter valid marks (between 0 and 100) for each subject.');
        mark1 = parseInt(prompt(`Enter marks for subject 1 for student ${i + 1}:`));
        mark2 = parseInt(prompt(`Enter marks for subject 2 for student ${i + 1}:`));
        mark3 = parseInt(prompt(`Enter marks for subject 3 for student ${i + 1}:`));
    }   if (mark1 >= 40 && mark2 >= 40 && mark3 >= 40) {
        marks.push([mark1, mark2, mark3]);
        totalMarks += mark1 + mark2 + mark3;
        // console.log(totalMarks);
    }
}

let count = 0;

for (let i = 0; i < marks.length; i++) {
    if (marks[i][0] >= 40 && marks[i][1] >= 40 && marks[i][2] >= 40) {
        count++;
    }
}        

if (count >= 4) {
    console.log(`There are ${count} students who got more than or equal to 40 marks in each subject.`);
} else {
    console.log(`There are ${count} students who got more than or equal to 40 marks in each subject.`);
    }