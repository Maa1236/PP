/*
1. Write a program that checks if a given element e is in the array a.
Input: e = 3, a = [5, -4.2, 3, 7]
Output: yes
*/

var a = [5, -4.2, 3, 7];

var e = 3;

for (i = 0; i < a.length; i++) {
    if (e === a[i]) {
        console.log("yes");
    }
}

/*
2. Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]
*/

var a = [-3, 11, 5, 3.4, -8];

for (i = 0; i < a.length; i++) {
    if (a[i] > 0) {
        a[i] *= 2;

    }
}

console.log(a);

/*
3. Write a program that finds the minimum of a given array and prints out its value and
index.
Input array: [4, 2, 2, -1, 6]
Output: -1, 3
*/

var a = [4, 2, 2, -1, 6];
var min = false;
var index = 0;

for (i = 0; i < a.length; i++) {
    if (i === 0 || a[i] < min) {
        min = a[i];
        index = i;
    }

}

console.log(min + ", " + index);

/*
4. Write a program that finds the first element larger than minimum and prints out its value.
Input array: [4, 2, 2, -1, 6]
Output: 2
*/

var a = [4, 2, 2, -1, 6];
var min1 = 0;
var min2 = 0;

for (i = 0; i < a.length; i++) {
    if (i === 0) {
        min1 = a[i];
    } else if (a[i] < min1) {
        min2 = min1;
        min1 = a[i];

    }
}
console.log(min2);


/*
5. Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16
*/

var a = [3, 11, -5, -3, 2];
var sum = 0;

for (i = 0; i < a.length; i++) {
    if (a[i] > 0) {
        sum += a[i]
    }
}

console.log(sum);

/*
6. Write a program that checks if a given array is symmetric. An array is symmetric if it can
be read the same way both from the left and the right hand side.
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.
Input array: [3, 4, 12, 8]
Output: The array isn’t symmetric.
*/

var a = [2, 4, -2, 7, -2, 4, 2];
var n = a.length;
var res = true;

for (i = 0; i < n / 2; i++) {
    if (a[i] !== a[n - 1 - i]) {
        res = "The array isn’t symmetric";
    } else {
        res = "The array is symmetric";
    }
}
console.log(res);




/*
7. Write a program that intertwines two arrays. You can assume the arrays are of the same
length.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]
*/


var a = [4, 5, 6, 2];
var b = [3, 8, 11, 9];
var c = [];

for (var i = 0; i < a.length || i < b.length; i++) {
    c[c.length] = a[i];
    c[c.length] = b[i];
}
console.log(c);


/*
8. Write a program that concatenates two arrays.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9]
*/

var a = [4, 5, 6, 2];
var b = [3, 8, 11, 9];
var c = [];

for (i = 0; i < a.length; i++) {

    c[c.length] = a[i];

}

for (j = 0; j < b.length; j++) {
    c[c.length] = b[j];
}
console.log(c);

/*
Write a program that deletes a given element e from the array a.
Input: e = 2, a = [4, 6, 2, 8, 2, 2]

Output array: [4, 6, 8]
*/

var a = [4, 6, 2, 8, 2, 2];

var e = 2;



for (i = 0; i < a.length; i++) {
    if (a[i] === e) {
        a.splice(i, 1);
        i--

    }

}
console.log(a);
/*
Write a program that inserts a given element e on the given position p in the array a. If
the value of the position is greater than the array length, print the error message.
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8]
*/

var a = [2, -2, 33, 12, 5, 8];
var e = 78;
var p = 3;
if (p < a.length) {
    a.splice(p, 0, e);
    console.log(a);
} else {
    console.log("error");
}