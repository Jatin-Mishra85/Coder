// JavaScript for Question 14
// Write a function to find the sum of this series Up to n terms
// 1 + 1/4 + 1/9 + 1/16 + 1/32 +.........+n

function sumSeries(n){
    for(let i =1; i<=n; i++){
        console.log(1/Math.pow(i,2), i);
    }
}

sumSeries(10); // Example usage with n = 10