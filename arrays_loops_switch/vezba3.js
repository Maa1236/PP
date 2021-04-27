/*
Variable declaration and initialization
1. Create several variables using different letter cases and beginning characters. Check if they
still exist if you refer to them in different case - does case matter here? Try to declare a variable
starting with number as the first character.*/

var Letter = "A"
var nekibroj = 3
var letter3 = "3"
var $Letter = false
var _Mau 

var ANY = "MAU"
var mau = "aaa"


var result ='';
if (typeof  _Mau  !=="undefined") {
    result = "yes";
}
console.log(result);

console.log(typeof result);

// Save a string (text) describing your current mood in a variable and print it out in console.
var mood ="sleepy"
console.log(mood);

/*
Play around in the console: add, subtract, multiply and divide some numbers. Use numbers
stored in variables you created as well. Think about expressions: 3-2-31, 3*5-7/3, 4/2-1.14*3.
Why do we get these results?
*/

var a = 3;
var b = 25;
var c = -1;
var d = 10;

console.log(a + b - d);



// How many grams weight 1.2kg of bananas?

var g 
var kg = 1.2

g = 1.2 * 1000;

console.log(g);

/*
How many extra seconds we wait for our friend Anna who is being late for 5 minutes? What
about Tom who is being late half an hour? It is hard to be on time these days…
*/

var extraSec
var timeAna = 5;
var timeTom = 30;


extraSecAna = timeAna * 60;
extraSecTom = timeTom * 60;

console.log(extraSecAna);
console.log(extraSecTom);

// vezba 7
/*
How many MB of additional memory we have if we buy a 4GB USB stick? How many news
articles each in size 98KB can fit in it?
*/

var usb =  4;
var usbSizeMb 
var news = 98 / 1000 /1000;

usbSizeMb = usb * 1000;
news = usbSizeMb / news;

console.log(usbSizeMb);
console.log(news);

/*
Do you know any other way to write a = a * 2? How about: b = b + 3; c = c / 5; d = d - 7?
*/

var a = 3; 
var b = 1;
var c = 20
var d = 10;

a = a + a;

b = b + 2 +1;

c = c / (4 +1);

d = d - (14/2);

console.log(c);

/*
Create the following variables:
- a variable containing your name,
- a variable containing your age,
- a variable describing if you have a cat or not.
* Each variable has to start with a different type of character.
Print them all out in the console and check their types.
*/

var _name = "Marija";
var $age = 33;
var cat = "imam macku";

console.log("Zovem se " + _name + " imam " + $age + " godina i " + cat);

console.log(typeof  _name);
console.log(typeof $age);
console.log(typeof cat);

// verzija 2

var _name = "Marija";
var $age = 33;
var cat = true;

console.log("Zovem se " + _name + " imam " + $age + " godina i " + "ima macku "  + cat);

console.log(typeof  _name);
console.log(typeof $age);
console.log(typeof cat);

/*
Check which type are these values:
- “number”
- true
- null
- “false”
- 56
*/

var a = "number";
var b = true;
var c = null;
var d = "false";
var e = 56;

console.log(typeof a, typeof b, typeof c, typeof d, typeof e);



//  \n za ovi red

/*
Use the console to check the results you think should go in the following table:
*/

var p1 = true;
var p2 = true;
var p3 = false;
var p4 = false;
var q1 = true;
var q2 = false;
var q3 = true;
var q4 = false;
var a1 = p1&&q1;
var a2 = p2&&q2;
var a3 = p3&&q3;
var a4 = p4&&q4;
var b1 = p1||q1;
var b2 = p2||q2;
var b3 = p3||q3;
var b4 = p4||q4;

console.log("Rezultat za p1&&q1 je: " + a1);
console.log("Rezultat za p2&&q2 je: " + a2);
console.log("Rezultat za p3&&q3 je: " + a3);
console.log("Rezultat za p4&&q4 je: " + a4);
console.log("Rezultat za p1||q1 je: " + b1);
console.log("Rezultat za p2||q2 je: " + b2);
console.log("Rezultat za p3||q3 je: " + b3);
console.log("Rezultat za p4||q4 je: " + b4);

/*
If the variable age stores the information about user’s age, how we can check whether it
contains a correct value? Write expressions for checking:
● Is age negative value
● Is age greater than 120
*/

var age = 30;
var result;

if (age < 0 || age > 120){
    result = "negative";
}
else {
    console.log(age);
}

console.log(result);

/*
Let’s say there are speed limitations on a motorway from 60 to 120 kilometers per hour. If
we store the current speed value in the variable speed. Write an expression which will check if
we are driving drive safely or not? (true if we are driving safe and false if not)
*/

var speed = 70;

var safe = speed > 60 && speed < 120;

console.log("vozimo dozvoljeno " + safe);




