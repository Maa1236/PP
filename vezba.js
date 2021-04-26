// vezba 1 
/*
Write a program that compares two numbers and displays the larger. Display the result in
the console.
*/

var a = 1;
var b = 2;

if (b > a) { 
    console.log(b);

}
else {
    console.log(a);
}

    // vezba 2

var a = 4;
if (a % 2 == 0)
{
  result = "even";
}
else {
     result = "odd"
}

// vezba 3

var a = 12;
if (a % 3 == 0 || a % 5 == 0)
{
  result = "even";
}
else {
     result = "odd"
}

console.log (result);

// vezba 4
/*
Write a conditional statement to find the sign of product of three numbers. Display the
result in the console with the specified sign.
Sample numbers: 3, -7, 2
Output: The sign is - 
*/

var a = 3;
var b= -7;
var c = 2;
var result;

if (a > 0 && b < 0 && c > 0){
    result = "The sign is -";
}

// verzija 2

if ((a + b + c) > 0) {
    result = "The sign is +";
}
else {
    result = "The sign is -";
}
console.log(result);


// vezba 5
/*
Write a program to check if the variable is a number and if it’s a number, check if it is
divisible by 2. If it is, print the result, if not, show “X”.
*/

var a = 10;
var result;

if (typeof a === "number") {
    if (a % 2 === 0)
{
  result = a / 2;
}
else {
     result = "X"
}
}
console.log(result);

// verzija 2

var a = 10;
var result;

if (typeof a === "number" && a % 2 === 0) {
    console.log(result = a / 2);
}
else {
   console.log(result = "X");
}


// vezba 6

/*
Write a conditional statement to
find the largest of five
numbers. Display the result in
console.

Sample numbers: -5, -2, -6, 0, -1

Output: 0
*/

var a = -5, b = -2, c = -6, d = 0, f = -1;

if (a > b && a > c && a > d && a > f) {
    console.log(a);
}
else if (b > a && b > c && b > d && b > f) {
    console.log(b);
}
else if (c > a && c > b && c > d && c > f) {
    console.log(c);
}
else if (d > a && d > b && d > c && d > f) {
    console.log(d);
}
else {
    console.log(f);
}

// vezba 7

/*
Write a conditional statement to
sort three numbers.

Sample numbers : 0, -1, 4

Output : 4, 0, -1
*/

var a = 0, b = -1, c = 4;

if (a > b && a > c && b > c) {
    console.log(a, b, c);
}
else if (b > a && b > c && a > c){
    console.log(b, a, c);
}
else {
    console.log(c, a, b);
}

/*
Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
Formula : F = (9*C/5) + 32 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
Sample Input: 60°C
Output : 60°C is 140 °F
*/

var C = 60;
var F;

F = (9*C/5) + 32;

console.log(F + " °F");

// za celzijus

var C;
var F = 140;

C = (F - 32) * 5/9;

console.log(C + " °C");

/*
Write a JavaScript program to get the difference between a given number and 13, if
the number is greater than 13 return double difference between that number and 13.
Sample Input: 11 Sample Input: 32
Output : 2 Output : 38
*/

var a = 13;
var b = 11;
var result;

if (b > 26 || b < 0) {
    if (b > a) {
        result = (b - a)*2;   
    }
}   
else if (b < 26 && b > a) {
    result = b - a;
}
else if (a > b) {
    result = a - b;
}
console.log(result);

// verzija 2
/*
var a = 13;
var b = 11;
var result ="";

if (a > b) {
    if (b > 26)
{
  result = (a - b) * 2;
}
else {
     result = a - b;
}
}
console.log(result);
*/

// vezba 8
/*
Write a JavaScript program to compute the sum of the two given integers. If the two
values are same, then returns triple their sum.
Sample Input: 12,5 Sample Input: 8,8
Output : 17 Output : 48
*/

var a = 12;
var b = 5;
var result;

result = a + b;

if (a === b) {
    console.log(result * 3);
}
else {
     console.log(result);
}

/*
Write a JavaScript program to check two given numbers and print “true” if one of
the number is 50 or if their sum is 50.
Sample Input: 5,54 Sample Input: 6,50 Sample Input: 40,10
*/

var a = 5;
var b = 54;
var resultA = "true";
var resultB = " ";

if (a === 50 || b === 50 && a + b === 50) {
    console.log("true");
}
else {
    console.log("false")
}

/*
Write a JavaScript program to check a given integer is within 20 of 100 or 400,
and print range in which number belongs.
Sample Input: 13 Sample Input: 34 Sample Input: 256
Output : - Output : 20 ⇔ 100 Output : 100 ⇔ 400
*/

var a = 13;


if (a > 20 && a < 100) {
    console.log(a  + "is 20 ⇔ 100")
}
else if (a > 100 && a < 400) {
    console.log(a + "is  100 ⇔ 400")
}
else {
    console.log("not within a given range")
}




