/*1. Write a program that shows text representation of a day in a week for a number input from
1 to 7. Print output in console.
For input 1, output should be “Monday”.
*/

var d = 1; 

switch (d) {
    case 1: 
    console.log("Ponedeljak")
    break;
    case 2: 
    console.log("Utorak")
    break;
    case 3: 
    console.log("sreda")
    break;
    case 4: 
    console.log("cetvrtak")
    break;
    case 5: 
    console.log("petak")
    break;
    case 6: 
    console.log("subota")
    break;
    case 7: 
    console.log("nedelja")
    break;
    
}

/*
2. Write a program that shows text representation of a day in a week for a number input from
1 to 7. All other cases output a message explaining that input must be a number between 1
and 7.
For input 1, output should be “Monday”.
For input 10, output should be “Input must be a number between 1 and 7”.
*/


var d = 10; 

switch (d) {
    case 1: 
    console.log("Ponedeljak")
    break;
    case 2: 
    console.log("Utorak")
    break;
    case 3: 
    console.log("sreda")
    break;
    case 4: 
    console.log("cetvrtak")
    break;
    case 5: 
    console.log("petak")
    break;
    case 6: 
    console.log("subota")
    break;
    case 7: 
    console.log("nedelja")
    break;
    default:
         console.log("Input must be a number between 1 and 7")
    break;
    
}

/*
3. Write a program that for a 1-7 number input (representing a day in a week) shows if that day
is a weekday or weekend. All other cases output a message explaining that input must be a
number between 1 and 7.
For input 2, output should be “It’s weekday”.
For input 6, output should be “It’s weekend”.
For input 12, output should be “Input must be number between 1 and 7”.
*/


var d = 7; 
var result;

switch (d) {
    case 1: 
    
    case 2: 
    
    case 3: 
    
    case 4: 
    
    case 5: 
    console.log("It’s weekday")
    break;
    case 6: 
    
    case 7: 
    console.log("It’s weekend")
    break;
    default:
         console.log("Input must be a number between 1 and 7")
    break;
    
}

/*
4. Write a program that for a 1-12 number input (representing a month in a year) shows that
month’s name. All other cases output a message explaining that input must be a number
between 1 and 12.
For input 2, output should be “February”.
For input 6, output should be “June”.
For input 13, output should be “Input must be a number between 1 and 12”.
*/

var m = 7; 

switch (m) {
    case 1: 
    console.log("Jan")
    break;
    case 2: 
    console.log("Feb")
    break;
    case 3: 
    console.log("Mar")
    break;
    case 4: 
    console.log("Apr")
    break;
    case 5: 
    console.log("May")
    break;
    case 6: 
    console.log("Jun")
    break;
    case 7: 
    console.log("July")
    break;
    case 8: 
    console.log("Aug")
    break;
    case 9: 
    console.log("Sep")
    break;
    case 10: 
    console.log("Okt")
    break;
    case 11: 
    console.log("Nov")
    break;
    case 12: 
    console.log("Dez")
    break;
    default:
         console.log("Input must be a number between 1 and 12")
    break;
    
}

/*
5. Write a program that for a 1-12 number input (representing a month in a year) shows what
season it is. All inputs different from 1-12 output a message explaining that input must be a
number between 1 and 12.
*/


var m = 12

switch (m) {
    case 1: 
   
    case 2: 

    case 12:
    console.log("winter")
    break;
    case 3: 
    
    case 4: 
    
    case 5: 
    console.log("spring")
    break;
    case 6: 
    
    case 7: 
    
    case 8: 
    console.log("Summer")
    break;
    case 9: 
    
    case 10: 
    
    case 11: 
    console.log("Autumn")
    break;

    default:
         console.log("Input must be a number between 1 and 12")
    break;
    
}

/*
6. Write a program that for a string input of a grade from “A”-“F” outputs a proper info
message about that grade in the following manner: A - &quot;Good job&quot;&quot;, B - &quot;Pretty good&quot;&quot;, C -
&quot;Passed&quot;&quot;, D - &quot;Not so good&quot;&quot;, F - &quot;Failed&quot;. Input different from letters A-F outputs a message
&quot;Unknown grade&quot;.
*/

var a = "A"

switch (a) {
    case "A": 
    console.log("Good job")
    break;
    case "B": 
    console.log("Pretty good")
    break;
    case "C": 
    console.log("Passed")
    break;
    case "D": 
    console.log("Not so good")
    break;
 case "F": 
    console.log("Failed")
    break;
    default:
         console.log("Unkown grade")
    break;
    
}

/*
7. Write a program that takes as input a city name and outputs the country where the city is.
You may choose which cities and countries you want to output yourself, however there has
to be at least 5 countries and 15 cities. Note that each country must have a different
number of cities. Input different from the listed cities should output a message&quot;Please
choose a different city&quot;.
*/


var city = "Novi Sad"
switch (city) {
    case "Novi Sad": 
    
    case "Beograd": 
    
    case "Zrenjanin": 

    case "Kikinda": 

    case "Nis":
    console.log("Serbia");
    break;
    case "Berlin": 
    
    case "Freiburg": 

    case "Stuttgart":

    case "Dresden":

    case "Bremen":
    console.log("Germany");
    break;
    case "New York":
    
    case "Chicago":

    case "Seattle":
    
    case "Boston":
    
    case "Detroit":
    console.log("USA");
    default:
         console.log("Please choose a different city");
    break;
}


/*
Write a program that takes as input two numbers and a string denoting the operation (“+”, “-
”, “*”, “/”) and prints out the appropriate result. Watch out for division by zero!
*/

var a = 2;
var b = 3;
var o = "*";

        switch ("*") {
            case "+":
                console.log(a + b);
                break;
            case "-":
                console.log(a - b);
                break;
            case "*":
                console.log(a * b);
                break;
            case "/":
                if (b === 0) {
                    console.log("b can not be 0")
                } else {
                    console.log(a / b);
                }
                break;
        }

    






