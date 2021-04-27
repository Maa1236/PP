/*Write an array of months in a year. Using console.log display June, October and January
from the array.
*/

var arrayMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

console.log(arrayMonth[5]);
console.log(arrayMonth[9]);
console.log(arrayMonth[0]);

/*
Write an arrays of days in a week. Using console.log display Sunday from the array.
*/

var daysOfWeek = ["pon", "uto", "sreda", "cet", "pet", "sub", "ned"]

console.log(daysOfWeek[6]);

/*
Print all negative elements from the array [2, -4, 5, -2, -11].
 */

var a = [2, -4, 5, -2, -11];

for (i = 0; i < a.length; i++) {
    if (a[i] < 0) {
        console.log(a[i]);
    }
}

/*
4. Print all elements with indices divisible by 3 from the array [5, 15, -5, 20, 12, 18,
72, 14, 9].
*/

var a = [5, 15, -5, 20, 12, 18, 72, 14, 9];

for (i = 1; i < a.length; i++) {
    if (i % 3 === 0) {
        console.log(a[i]);
    }
}

/*
What is the index of number 24 in the following array?
[[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3,
10, 26, 7]];
Using console.log:
● Display the 3rd element of the array,
● Display the 2nd element of the 3rd element.
*/

var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3,
    10, 26, 7]];


console.log(a[3]);
console.log(a[3][2]);