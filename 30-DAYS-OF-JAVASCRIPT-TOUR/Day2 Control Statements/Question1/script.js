// JavaScript for Question 1
//`a. Write a program to print number from one to 80 separated by tab, 8 number per line.`

let line= '';
for (let i=0; i <= 80; i++) {
    if(i%8===0){
        line = line + ' \n' + i;
    }else {
        line = line + '\t' + i;
    }

}
console.log(line);
