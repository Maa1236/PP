// 1. Write a program that calculates the maximum of two given numbers.

function max(a, b) {
    if (a > b) {
        return a;
    } else if (b > a) {
        return b;
    } else {
        return "numbers are equal";
    }
}

var result = max(10, 4);
console.log(result);

// 2. Write a program that checks if a given number is odd.

function checkOdd(a) {
    return a % 2 !== 0;
}

var result = checkOdd(1);
console.log(result);

// 3. Write a program that checks if a given number is a three digit long number.

function threeDig(a) {
    if (a >= 100 && a < 1000) {
        return "number is a three digit long number";
    } else {
        return false;
    }
}

var result = threeDig(999);
console.log(result);

// 4. Write a program that calculates an arithmetic mean of four numbers.



function mean(a, b, c, d) {
    result = (a + b + c + d) / 4;
    return result;
}

var result = mean(1, 2, 3, 4);
console.log(result);

// v.2:


function mean(a, b, c, d, n) {
    return (a + b + c + d) / n;

}
var result = mean(1, 2, 3, 4, 4);
console.log(result);


// Write a program that draws a square of a given size. For example, if the size of square
// is 5 the program should draw:
// *****
// * *
// * *
// * *
// *****
function squareStar(n) {
    var res = "\n";

    for (var i = 0; i < n; i++) {
        res += '*';

    }
    res += '\n';
    for (var i = 0; i < (n - 2); i++) {
        res += '*\t*\n';

    }

    for (var i = 0; i < n; i++) {
        res += '*';


    }
    return res;

}
var stars = squareStar(5);
console.log(stars);

// v.2

function stars(a) {
    var res = '';
    for (var i = 0; i < a; i++) {
        for (var j = 0; j < a; j++) {
            if (i === 0 || i === a - 1 || j === 0 || j === a - 1) {
                res += '*';
            } else {
                res += " ";
            }
        }
        res += '\n';
    }
    return res;
}
var result = stars(7);
console.log(result);

// Write a program that draws a horizontal chart representing three given values. For
// example, if values are 5, 3, and 7, the program should draw:
// * * * * *
// * * *
// * * * * * * *

function horizontalChart(a, b, c) {
    var res = "";

    for (var i = 0; i < a; i++) {
        res += '*\t';
    }
    res += '\n';
    for (var i = 0; i < b; i++) {
        res += '*\t';
    }
    res += '\n';
    for (var i = 0; i < c; i++) {
        res += '*\t';
    }
    return res;

}

var chart = horizontalChart(5, 3, 7);
console.log(chart);

// v.2

function chart() {
    var res = "";
    for (var i = 0; i < arguments.length; i++) {
        for (var j = 0; j < arguments[i]; j++) {
            res += '*\t';
        }
        res += '\n';
    }
    return res;
}
console.log(chart(5, 3, 7, 12, 6, 8, 2));

// 7. Write a program that calculates a number of digits of a given number.

function digits(a) {
    var res = ""

    if (a / 10 >= 1) {

        res += a;

        return res.length;
    }
}


var res = digits(200);
console.log(res);

// 8. Write a program that calculates a number of appearances of a given number in a given
// array.
// Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
// Result: 3


function appearances(arr, e) {

    var res = [];

    for (i = 0; i < arr.length; i++) {
        if (arr[i] === e) {
            res += arr[i];
        }
    }
    return res.length;
}

res = appearances([2, 4, 7, 8, 7, 7, 1], 7);
console.log(res);

// 9. Write a program that calculates the sum of odd elements of a given array.

function sumOdd(arr) {

    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            sum += arr[i];
        }
    }

    return sum;
}
var sum = sumOdd([1, 2, 3, 4, 5]);
console.log(sum);



// 10. Write a program that calculates the number of appearances of a letter a in a given string.


function appOfLetters(string, a) {

    var res = "";

    for (var i = 0; i < string.length; i++) {
        if (string[i] === a) {
            res += string[i];
        }
    }
    return res.length;
}
var res = appOfLetters("apperance", "a");
console.log(res);


// Modify the program so it calculates the number of both letters a and A.

function appOfLetters(string, a, b) {

    var res = "";

    for (var i = 0; i < string.length; i++) {
        if (string[i] === a || string[i] === b) {
            res += string[i];
        }
    }
    return res.length;
}
var res = appOfLetters("Apperance", "a", "A");
console.log(res);

// 11. Write a program that concatenates a given string given number of times. For example, if
// “abc” and 4 are given values, the program prints out abcabcabcabc.


function concatenate(string, n) {

    var stringRes = "";

    for (var i = 0; i < n; i++) {

        stringRes += string;
    }
    return stringRes;
}

var stringRes = concatenate("abc", 4);
console.log(stringRes);