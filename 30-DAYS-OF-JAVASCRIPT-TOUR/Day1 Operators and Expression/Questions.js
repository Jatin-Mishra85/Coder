// Write a program to convert Celsius to Fahrenheit.
let Celsius , Fahrenheit;
Celsius = 25;
Fahrenheit = (Celsius * 9) / 5 + 32;
console.log(Fahrenheit);

////////////////////////////////////////////////////////////////

//write a program that accepts the radius of the circle and calculates the area and parameter of the circle.
let radius = 25;
let area = Math.PI * radius**2;
let circumference = 2 * Math.PI * radius;
console.log(`The area of the circle is: ${area}`);
console.log(`The circumference of the circle is: ${circumference}`);

////////////////////////////////////////////////////////////////

// write a program that accepts any number as and input and print the remainder of number after dividing by 3
let valu = 5849;
console.log(valu % 3);

////////////////////////////////////////////////////////////////

// write a program that accepts two number if the first is greater than the sec then print the difference otherwise print the sum
let num1 = 74;
let num2 =65;
result = num1>num2 ? num1-num2 : num2+ num1;
console.log(result);

////////////////////////////////////////////////////////////////

// write a program that accepts 5 subjects marks and calculates the total percentage of them
let english = 85;
let hindi = 90;
let math = 80;
let science = 75;
let computer = 70;
let percentage = (english + hindi + math + science + computer) / 500 * 100;

console.log(`Total percentage: ${percentage}%`);

////////////////////////////////////////////////////////////////

// question 1
// let a = -3;
// console.log(-a -a + !a);
// //output: 6
////////////////////////////////////////////////////////////////
// question 2
// let a = 2, b=1, c,d;
// c= a<b;
// d = (a>b) && (c<b);
// console.log(c,d);
// //output: false , true
////////////////////////////////////////////////////////////////
// question 3
// let a=9, b=15,c=16,d=12,e,f;
// e= !(a,b || b<c);
// f = (a>b)? a-b: b-a;
// console.log(e,f);
// //output: false , 6
////////////////////////////////////////////////////////////////
// question 4
// let a =5;
// a=6;
// console.log(a + a*5);
// // output: 36
/////////////////////////////////////////////////////////////////
// question 5
// let a =5, b =5;
// console.log(++a, b--); // output: 6,5
// console.log(a, b);// output: 6,4
// console.log(++a, b++);// output: 7,4
// console.log(a, b);// output: 7,5
////////////////////////////////////////////////////////////////
// question 6
// let x,y,z;
// x = 8++;
// y = ++x;
// z = (x+y);
// console.log(x,y,z);
// // output: error at code line 35
////////////////////////////////////////////////////////////////
// question 7
// let a =4, b=8, c=3,d=9, z;
// z= a++ + ++b + c-- - --d;
// console.log(a,b,c,d,z);
// // output: 5, 9, 2, 8, 8
////////////////////////////////////////////////////////////////
// question 8
// let a= 14, b,c;
// a= a%5; // output: 4
// b=a/3; // output: 1.3333333333
// c=a/5%3;// output: 0.8
// console.log(c);
// // for C = a/5%3 ==> 4/5%3 ==> 0.8%3 ==> 0.8 because 0.8<3 so remainder will be 0.8
////////////////////////////////////////////////////////////////
// question 9
// let a=15,b=13,c=16,x,y;
// x= a-3%2+c*2/4%2+b/4; // output: 17.25
// y= a= b+5-b+9/3; // output: 8
// console.log(x,y);
////////////////////////////////////////////////////////////////
// question 10:
// let x,y,z, k =10;
// k += (x=5, y=x+2, z=x+y); // output: last value will be taken because of comma operator so k =12
// // k += 12 ==> 10 +12
// console.log(x,y,z,k);
// // 5,7,12,22
////////////////////////////////////////////////////////////////
// question 11:
// let a =9, ch ='A';
// a = a +ch+24; // output: 9A24
// console.log(a,ch, ch/a); // output: NAN
////////////////////////////////////////////////////////////////
// // question 12
// let a =b=c=d=4;
// a*=b+1;// output: 20
// c+=d*=3;// output: 16
// console.log(a,b,c,d);
// // output: 20,4,16,12
////////////////////////////////////////////////////////////////
// // question 13
// let a=5, b=10, temp;
// temp=a, a=b, b=temp;
// console.log(a,b);
// // output: 10,5
////////////////////////////////////////////////////////////////
// // question 14
// let a =10, b=3, max;
// a>b? max=a: max=b;
// console.log(max);
// // output: 10
////////////////////////////////////////////////////////////////
// question 15
//  let a=5, b=6;
//  console.log(a=b);
//  console.log(a==b);
//  console.log(a,b);
//  // output: 6, true, 6, 6
////////////////////////////////////////////////////////////////
// question 16
// let a=c=3 ,b=d=4,x,y;
// x=(a=5) && (b=7);
// y= (c=5) || (d=8);
// console.log(a,b,c,d,x,y);
// x= (a==b) && (b=9);
// y= (c==5) || (d==8);
// console.log(a,b,c,d,x,y);
////////////////////////////////////////////////////////////////
 // question 17
//  let a = 10;
//  a = a++; 
//  a= a++*a--;
//  console.log(a); // output: 110
//  console.log(a++*a++); // output: 12210
////////////////////////////////////////////////////////////////
// question 18
// let a=2, b=2,x,y;
// x= 4*(++a*2+3);
// y= 4*(b++*2+3);
// console.log(a,b,x,y);
// // output: 3 3 36 28