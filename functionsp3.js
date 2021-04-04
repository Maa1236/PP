/*1. Write a program to insert a string within a string at a particular position (default is 1,
beginning of a string).
"My random string" "JS"; -> "JS My random string"
"My random string" "JS", 10 -> "My random JS string"*/

function insertString(string, insertS, position) {

    var tempArray = [];
    var newString = "";

    if (typeof position === "undefined") {
        return newString = insertS + " " + string;
    }
    for (var i = 0; i < string.length + 2; i++) {
        if (i === position) {
            tempArray[position] = insertS;
            tempArray[position + 1] = " ";
        }

        tempArray[tempArray.length] = string[i];
        newString += tempArray[i];

    }
    return newString;

}
var result = insertString("My random string", "JS", 10);
console.log(result);

// v.2

function insertString(string, insertS, position) {
    var newString = '';
    if (typeof position === 'undefined') {
        return (newString = insertS + ' ' + string);
    }
    for (var i = 0; i < string.length; i++) {
        if (i === position) {
            newString += insertS;
        }
        newString += string[i];
    }
    return newString;
}
var result = insertString('test', 'JS', 2);



/*3.Write a program to filter out falsy values from the array.
[NaN, 0, 15, false, -22, "", undefined, 47, null] -> [15, -22, 47]*/

function filterOutFalsy(arr) {
    var newArray = [];
    for (var i = 0; i < arr.length; i++) {
        if (!!arr[i] !== false) {
            newArray[newArray.length] = arr[i];
        }
    }
    return newArray;
}
var result = filterOutFalsy([NaN, 0, 15, false, -22, "", undefined, 47, null]);
console.log(result);

/*4.Write a function that reverses a number. The result must be a number.
12345 -> 54321 // Output must be a number*/

function reverse(num) {
    var tempString = "";
    var newString = "";
    tempString += num;
    for (var i = tempString.length - 1; i > -1; i--) {
        newString += tempString[i];

    }
    return parseInt(newString);

}
var result = reverse(12345);
console.log(result);

/*5.Write a function to get the last element of an array. Passing a parameter "n" will return the
last "n"; elements of the array.
[7, 9, 0, -2] -> -2
[7, 9, 0, -2], 2 -> [0, -2]*/

function lastElements(arr, n) {
    var newArray = [];

    if (typeof n == "undefined") {
        newArray[newArray.length] = arr[arr.length - 1];
    }
    for (var i = arr.length - n; i < arr.length; i++) {
        newArray[newArray.length] = arr[i];
    }
    return newArray;
}

var res = lastElements([7, 9, 0, -2], 2);
console.log(res);


/*6.

/*Write a function to hide email address.
"myemailaddress@bgit.rs" -> "mye...@bgit.rs"*/

function hideEmail(email) {
    var newString = "";
    var newString1 = "";
    var p = "@";

    for (var i = 0; i < email.length; i++) {
        if (email[i] === p) {
            var index = i;
        }
    }
    for (var j = 0; j < email.length; j++) {
        if (j < 3) {
            newString += email[j];

        } else if (j > index - 1) {
            newString1 += email[j];
        }
    }
    return newString + "..." + newString1;
}

var res = hideEmail("maaachak@gmail.com");
console.log(res);