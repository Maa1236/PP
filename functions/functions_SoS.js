/*1. Write a function that checks if a given string contains digit 5.
Input: “1b895abd”
Output: true
Input: “1bser9re”
Output: false
*/

function checksIfcontains(digit, string) {
    for (var i = 0; i < string.length; i++) {
        if (string[i] === digit) {
            return true;
        } else {
            return false;
        }
    }
}
console.log(checksIfcontains("5", "1bser9re"));

/*2.Write a function that in a given string replaces all the appearances of the string ‘JS’ with
‘**’.
Input: “Programming in JS is super interesting!”
Output: “Programming in ** is super interesting!”
*/

function replaceApp(string, subString, rep) {
    var splitStringToArray = function(string) {
            var word = "",
                newArray = [];
            for (var i = 0; i < string.length; i++) {
                if (string[i] == " ") {
                    newArray[newArray.length] = word;
                    word = "";
                    continue;
                }
                word += string[i];
            }
            newArray[newArray.length] = word;
            return newArray;
        },
        newArr = [],
        temp = "",
        newArray = splitStringToArray(string);

    for (var i = 0; i < newArray.length - 1; i++) {
        newArr[i] += " ";
    }
    for (var i = 0; i < newArray.length; i++) {
        for (var j = 0; j < subString.length; j++) {
            if (newArray[i] === subString) {
                newArray[i] = rep;
            }
        }
        temp += newArray[i];
        temp += " ";
    }
    return temp;
}
console.log(replaceApp("Programming in JS is super interesting!", "super", "****"));


/*3.Write a function that inserts a given character on a given position in the string.
Input: “Goo morning”, 4, ‘d’
Output: “Good morning”
*/

function insert(string, char, pos) {
    var res = "";
    for (i = 0; i < string.length; i++) {
        if (i === pos - 1) {
            res += char;
        }
        res += string[i];
    }
    return res;
}
console.log(insert("Goo morning", "d", 4));

/*4.Write a function that deletes a character from the given position in the string.
Input: “Goodd morning!”, 3
Output: “Good morning!”
*/

function deleteChar(string, position) {
    var res = "";
    for (var i = 0; i < string.length; i++) {
        if (i === position) {
            continue;
        }
        res += string[i];
    }
    return res;
}
console.log(deleteChar("Goodd morning!", 3));

/*5.Write a function that deletes every second element of the given array.
Input: [3, 5, 1, 8, 90, -4, 23, 1, 67]
Output: [3, 1, 90, 23, 67]
*/

function deleteEverySecondEl(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i += 2) {
        newArray[newArray.length] = array[i];
    }
    return newArray;
}
console.log(deleteEverySecondEl([3, 5, 1, 8, 90, -4, 23, 1, 67]));

/*6. Write a function that replaces the elements of the given array between two positions with
their doubled values.
Input: [3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6
Output: [3, 5, 2, 16, 180, -8, 46, 1, 67]
*/

function replaceWithDouble(array, start, end) {
    var newArray = [],
        temp = array[0];

    for (var i = 0; i < array.length; i++) {
        if (i > start && i <= end) {
            temp = array[i] * 2;
            array[i] = temp;
        }
        newArray[newArray.length] = array[i];
    }
    return newArray;
}
console.log(replaceWithDouble([3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6));

/*8. Write a function that checks if every element of the first array is contained in the second
array. Be careful with repetitions!
Input: [3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]
Output: true
*/

function isContained(array1, array2) {
    var deleteDuplicates = function(array) {
        var temp = [];
        for (var i = 0; i < array.length; i++) {
            if (array[i] !== array[i + 1]) {
                temp[temp.length] = array[i];
            }
        }
        return temp;
    }
    var tempArray = [],
        res = "",
        res2 = "";
    for (var i = 0; i < array1.length; i++) {
        for (var j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                tempArray[tempArray.length] = array1[i];
            }
        }
        var newTempArray = deleteDuplicates(tempArray);
        res += array1[i];
        res2 += newTempArray[i];
    }
    return res === res2;
}
console.log(isContained([3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3, 6, 5, 7]));

/*12.Write a function that prints out an array of the numbers aligned from the right side.
Input: [78, 111, 4, 4321]
Output:
78
111
4
4321
*/

function printArray(array) {
    var res = "",
        temp = [],
        maxi = "",
        blank = 0;

    for (var i = 0; i < array.length; i++) {
        temp[i] = array[i] + "";
        if (temp[i].length > maxi.length) {
            maxi = temp[i];
        }
    }

    for (var i = 0; i < temp.length; i++) {
        blank = maxi.length - temp[i].length;
        var tabs = '';
        for (k = 0; k < blank; k++) {
            tabs += " ";
        }
        res += tabs + temp[i];
        res += '\n';
    }
    return res;
}
console.log(printArray([78, 111, 4, 4321]));
