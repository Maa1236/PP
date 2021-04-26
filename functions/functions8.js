/*1.Write IIFE that replaces the first and the last element of the given array and prints out its
elements.
Input array: [4, 5, 11, 9]
Output array: [ 9, 5, 11, 4]
*/

(function replacePlace(arr) {

    var index = 0,
        index2 = 0,
        a1 = arr[0],
        a2 = arr[0];
        
    for (var i = 0; i < arr.length; i++) {
        if (i === 0) {
            a1 = arr[arr.length - 1];
            index = i;
        }
        if (i === arr.length - 1) {
            a2 = arr[0];
            index2 = i;
        }
    }
    arr[index] = a1;
    arr[index2] = a2;

    return console.log(arr);
})([4, 5, 11, 9]);

/*2. Write IIFE that calculates the surface area of the given rectangle with sides a and b.
Input: 4 5
Output: 20*/

(function calcRecSurface(a, b) {
    return console.log(a * b);
})(4, 5);

/*3. Write IIFE that replaces all appearances of the letters m or M with * and returns the
number of replacements.
Input: prograMming
Output: progra**ing, 2*/

function replaceAppLetter(string, letter, replacement) {
    var res = "",
        tempArr = [],
        counter = 0,
        letter2 = letter.toUpperCase();

    for (var i = 0; i < string.length; i++) {
        tempArr[tempArr.length] = string[i];
        if (string[i] === letter || string[i] === letter2) {
            tempArr[i] = replacement;
            counter++;
        }
        res += tempArr[i];
    }
    return res + ", " + counter;
}
console.log(replaceAppLetter("prograMming", "m", "*"));

/*7. Write a function that filters elements of the given array so that they satisfy a condition
given by the callback function.
Input: [2, 8, 11, 4, 9, 3], callback function checks if the number is odd
Output: [11, 9, 3]
*/

function filter(array, action) {
    var filteredArray = [];
    for (var i = 0; i < array.length; i++) {
        if (action(array[i])) {
            filteredArray[filteredArray.length] = array[i];
        }
    }
    return filteredArray;
}
var output = filter([2, 8, 11, 4, 9, 3], function(a) { return a % 2 !== 0; });
console.log(output);