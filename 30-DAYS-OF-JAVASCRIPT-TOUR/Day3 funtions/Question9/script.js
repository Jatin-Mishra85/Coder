// JavaScript for Question 9
// write a function converter() that converts inches into cm and vise versa. the first argument is a number, the second argument is ("i" or "c") denoting the measurement unit of the length given in first argument.

function converter(length , unit){
    if(unit === "i"){
        return length * 2.54;
    }else{
        return length / 2.54;
    }   
}

console.log(converter(10, "i")); // Output: 25.4 cm
console.log(converter(25.4, "c")); // Output: 10 inches