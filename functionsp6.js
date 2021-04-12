/*1.
Write a function to count vowels in a provided string. Vowels are a, e, i, o, and u as well as A,
E, I, O, and U.
*/

function countVowels(string) {
    var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"],
        count = 0;
    for (var i = 0; i < string.length; i++) {
        for (var j = 0; j < vowels.length; j++)
            if (string[i] === vowels[j]) {
                count++;
            }
    }
    return count;
}
console.log(countVowels("Write a function to count vowels"));

/*2. Write a function that combines two arrays by alternatingly taking elements.
[‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3] */

function combineArr(arr1, arr2) {
    var tempArr = [];
    for (i = 0; i < arr1.length || i < arr2.length; i++) {
        tempArr[tempArr.length] = arr1[i];
        tempArr[tempArr.length] = arr2[i];
    }
    return tempArr;
}
console.log(combineArr(["a", "b", "c"], [1, 2, 3]));

/*3.Write a function that rotates a list by k elements.
For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]*/

function rotate(arr, k) {
    var rot1 = "",
        rot2 = "",
        res = "",
        arr1 = [];
    for (i = 0; i < arr.length; i++) {
        if (i > k - 1) {
            arr[k - 1] = rot1[0];
            rot1 += arr[i];
        }
        if (i < k) {
            rot2 += arr[i];
        }
    }
    res += rot1 + rot2;

    for (j = 0; j < res.length; j++) {
        arr1[arr1.length] = res[j];
    }

    return arr1;
}
console.log(rotate([1, 2, 3, 4, 5, 6], 3));

/* 4. Write a function that takes a number and returns array of its digits.
 */
function numToDig(num) {
    var tempString = "",
        tempArray = [];
    tempString += num;
    for (i = 0; i < tempString.length; i++) {
        tempArray[tempArray.length] = tempString[i];
    }
    for (i = 0; i < tempArray.length; i++) {
        tempArray[i] = parseInt(tempArray[i]);
    }
    return tempArray;
}
console.log(numToDig(999));

/*5.Write a program that prints a multiplication table for numbers up to 12.*/

function multiplicationTable(n) {
    var res = 1;
    for (var i = 1; i <= n; i++) {
        res = i * n;
        res1 = console.log(n + "*" + i + "=" + res);
    }
    return res1;
}
console.log(multiplicationTable(12));

/*6. Write a function to input temperature in Centigrade and convert to Fahrenheit.*/

function celsiusToFahrenheit(C) {
    F = (9 * C / 5) + 32;
    return F;
}
console.log(celsiusToFahrenheit(60));

/*7. Write a function to find the maximum element in array of numbers. Filter out all non-number
elements.*/

function maximumEl(arr) {
    max = false;
    for (var i = 0; i < arr.length; i++) {
        if (!isNaN(arr[i])) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
    }
    return max;
}
console.log(maximumEl([1, 3, 8, 4, 7, "s", 2]));

/* 8.Write a function to find the maximum and minimum elements. Function returns an array.
 */

function minAndMax(arr) {
    var min = false,
        max = false,
        res = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (i === 0) {
            min = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    res[0] = min;
    res[1] = max;
    return res;
}
console.log(minAndMax([1, 3, 8, 4, 7, 2]));

/*9.  a function to find the median element of array.*/

function median(arr) {
    var medNum = false,
        res = 0,
        n = arr.length / 2;
    for (var i = 0, j = arr.length - 1; i < arr.length, j > 0; i++, j--) {
        if (arr.length % 2 !== 0) {
            if (i === j) {
                medNum = arr[i];
            }

        } else if (i === n) {
            arr[j] = arr[i - 1];
            res += arr[i] + arr[j];
            medNum = res / 2;
        }
    }
    return medNum;
}
console.log(median([1, 2, 4, 8, 9, 22, 23]));

/*10.Write a function to find the element that occurs most frequently.
 */

function mostFrequentEl(arr) {
    var el = "",
        elMax = 1,
        mostFrequent = false;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                el += arr[i];
            }
            if (el.length > elMax) {
                elMax = el.length;
                mostFrequent = arr[i];
            }
        }
        el = "";
    }
    return mostFrequent;
}
console.log(mostFrequentEl([3, 7, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3]));

/* 11. Write a function to find and return the first, middle and last element of an array if the array
has odd number of elements. If number of elements is even, return just the first and the
last. In other cases (empty array), input array should be returned.*/

var input = [3, 7, "a", "a", "a", 2, 3, "a", 2, 4, 9];

function firstMiddleLast(arr) {

    if (typeof arr === "undefined") {
        return input;
    }
    for (var i = 0, j = arr.length - 1; i < arr.length, j >= 0; i++, j--) {
        if (arr.length % 2 !== 0) {
            if (i === j) {
                var middle = arr[i];
            }
        }
        var res = arr[0] + "," + middle + "," + arr[arr.length - 1];

        if (arr.length % 2 === 0) {
            return arr[0] + "," + arr[arr.length - 1];
        }

    }
    return res;
}

console.log(firstMiddleLast(input));

fml = [a[0], a[a.length - 1]];


/*12. Write a function to find the average of N elements. Make the function flexible to receive
dynamic number or parameters.
*/
var input = [1, 2, 3, 4, 5, 6];

function findAverage(arr) {
    var res = 0;
    for (i = 0; i < arr.length; i++) {
        res += arr[i];
    }
    return res / arr.length;
}
console.log(findAverage(input));

/* 13.Write a function to find all the numbers greater than the average.*/

var input = [1, 2, 3, 4, 5, 6];

function findAverage(arr) {
    var average = 0;
    res = 0,
        temp = [];
    res1 = 0;
    for (i = 0; i < arr.length; i++) {
        res += arr[i];
    }
    average = res / arr.length;

    for (i = 0; i < arr.length; i++) {
        if (arr[i] > average) {
            temp[temp.length] = arr[i];
        }
    }
    return temp;
}
console.log(findAverage(input));

/*14. The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the
square of the height (in meters). Write a function that takes two parameters, weight and
height, computes the BMI, and prints the corresponding BMI category:
● Starvation: less than 15
● Anorexic: less than 17.5
● Underweight: less than 18.5
● Ideal: greater than or equal to 18.5 but less than 25
● Overweight: greater than or equal to 25 but less than 30
● Obese: greater than or equal to 30 but less than 40
● Morbidly obese: greater than or equal to 40
*/

function calculateBMI(weight, height) {
    var BMI = weight / (height * height);
    var category;
    switch (true) {
        case (BMI < 15):
            category = "Starvation"
            break;
        case (BMI > 15 && BMI < 17.5):
            category = "Anorexic"
            break;
        case (BMI > 17.5 && BMI < 18.5):
            category = "Underweight"
            break;
        case (BMI >= 18.5 && BMI < 25):
            category = "Ideal"
            break;
        case (BMI >= 25 && BMI < 30):
            category = "Overweight"
            break;
        case (BMI >= 30 && BMI < 40):
            category = "Obese"
            break;
        default:
            category = "Morbidly obese"
            break;
    }
    return category;
}
console.log(calculateBMI(46, 1.48));

