/*1. Write a functional expression that duplicates each element of a given array.
Input: [2, 4, 7, 11, -2, 1]
Output: [2, 2, 4, 4, 7, 7, 11, 11, -2, -2, 1, 1]
*/

function duplicate(arr) {
    var newArr = [];
    arr.forEach(function(el) {
        newArr.push(el, el);
    });
    return newArr;
}

console.log(duplicate([2, 4, 7, 11, -2, 1]));

/* 2. Write a functional expression that removes all duplicates in a given array.
Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
Output: [1, 4, 8, 9, 12, 13]
*/
var removeDupli = function(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i]);
        }
    }

    newArr.sort(function(a, b) {
        return a - b;
    });

    return newArr;

}


console.log(removeDupli([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]));
// with foreach: 

var removeDupli = function(arr) {
    var newArr = [];
    arr.forEach(function(el) {
        if (!newArr.includes(el)) {
            newArr.push(el);
        }
    });

    newArr.sort(function(a, b) {
        return a - b;
    });

    return newArr;

}
console.log(removeDupli([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]));


/*3. 
a. Write a function that checks if a given array has odd number of elements.
Input: [1, 2, 9, 2, 1]
Output: true
b. Write a function that counts the number of elements less than the middle
element. If the given array has an even number of elements, print out an error
message.
Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
Output: 4*/

// a
function checkLength(arr) {
    return arr.length % 2 !== 0;
}

console.log(checkLength([1, 2, 9, 2, 1]))


// b

function lessThanMiddle(arr) {
    var final = [];
    if (arr.length % 2 !== 0) {
        arr.forEach(function(el) {
            if (el < arr[(arr.length / 2) - 0.5]) {
                return final.push(el);
            }
        });
        return final.length;
    } else {
        return "Error";
    }
}
console.log(lessThanMiddle([-1, 8.1, 3, 6, 2.3, 44, 2.11]))

/*4. Write a function that finds the smallest element of a given array. The function should
return an object that contains the smallest value and its last position in the array.
Input: [1, 4, -2, 11, 8, 1, -2, 3]
Output: { minValue: -2, minLastIndex: 6 }
*/

function smallestElement(arr) {
    var output = {};
    output.minValue = Math.min(...arr);
    output.minLastIndex = arr.lastIndexOf(output.minValue);
    return output;
}
console.log(smallestElement([1, 4, -2, 11, 8, 1, -2, 3]));

// index of the smallest el
function smallestElement(arr) {
    return arr.lastIndexOf(Math.min(...arr));
}
console.log(smallestElement([1, 4, -2, 11, 8, 1, -2, 3]));

/*5. a. Write a function that finds all the elements in a given array less than a given
element.
Input: [2, 3, 8, -2, 11, 4], 6
Output: [2, 3, -2, 4]

b. Write a function that finds all the elements in a given array that start with the “pro”
substring. The function should be case insensitive.
Input: [’JavaScript’, ’Programming’, ’fun’, ’product’]
Output: [’Programming’, ‘product’]

c. Write a function that expects an array and a callback function that filters out
some of the elements. Use functions defined in a) or b) to test it.*/

//  a

function lesserElements(arr, n) {
    var lesser = [];
    arr.forEach(function(el) {
        if (el < n) {
            return lesser.push(el);
        }
    });
    return lesser;
}
console.log(lesserElements([2, 3, 8, -2, 11, 4], 6));

// b

function proElements(arr, substring) {
    var elements = [];
    arr.forEach(function(el) {
        if (substring === el.toLowerCase().slice(0, 3)) {
            elements.push(el);
        }
    });
    return elements;
}
console.log(proElements(["JavaScript", "Programming", "fun", "product"], "pro"))

// c

function someFilters(arr, n, func) {
    return func(arr, n);
}
console.log(someFilters([2, 3, 8, -2, 11, 4], 6, lesserElements));
console.log(someFilters(["JavaScript", "Programming", "fun", "product"], "pro", proElements))

/*6.a. Write a list (array) of products you usually buy in the supermarket. Write a price
and name for each product. For example,
[

{name: ‘apples’, price: 100},
{name: ‘milk’, price: 80},
{name:’bananas’, price: 150}
]

b. Write a function that calculates the total price of your shopping list.
c. Write a function that calculates the average product price of your shopping list.
Print this value with the precision of three decimals.
d. Write a function that prints out the name of the most expensive product on your
shopping list. Write the name in uppercase.*/

// a
var list = [{ name: "apples", price: 120 },
    { name: "milk", price: 80 },
    { name: "bananas", price: 150 }
];

// b
function totalPrice(arr) {
    var total = 0;
    arr.forEach(function(el) {
        total += el.price;
    });
    return total;
}
console.log(totalPrice(list));

// c
function averagePrice(arr) {
    var total = 0;
    arr.forEach(function(el) {
        total += el.price;
    });
    return (total / arr.length).toFixed(3);
}
console.log(averagePrice(list));

// d

function mostExpensive(arr) {
    var prices = [];
    var hPrice = 0;
    var most;

    arr.forEach(function(el) {
        prices.push(el.price);
        hPrice = Math.max(...prices);
        if (el.price === hPrice) {
            most = el.name;
        }
    });
    return most.toUpperCase();
}
console.log(mostExpensive(list));

/*7. a. Write a function that checks if a given string is written in all capitals.
b. Write a function that checks if a given string contains any digits.
c. Write a function that checks if a given string is a valid hexadecimal color.
d. Write a function that checks if a given number belongs to the interval from 1900
to 2018.
e. Write a function named validator that returns an object with properties
stringValidator, passwordValidator, colorValidator, and yearValidator referencing
the functions from a) to d).*/

// a

function checkWriting(string) {
    return string === string.toUpperCase()
}
console.log(checkWriting("BANANAS"))

// b

function searchDigits(string) {
    var r = /\d+/
    return string.search(r) !== -1;
}
console.log(searchDigits("500 Bananas"))

// c

function isValidColor(str) {
    return str.match(/^#([0-9a-f]{3}){1,2}$/i) !== null;
}
console.log(isValidColor("#FFF"))

// d

function checkInterval(n) {
    return n > 1900 && n < 2018
}
console.log(checkInterval(2011))

// e

function Validator(str, pw, color, year) {
    this.stringValidator = str;
    this.passwordValidator = pw;
    this.colorValidator = color;
    this.yearValidator = year;
}

var check = new Validator(checkWriting, searchDigits, isValidColor, checkInterval);

console.log(check);
console.log(check.stringValidator("MAU"))
console.log(check.passwordValidator("23fsd"))
console.log(check.colorValidator("#FFF000"))
console.log(check.yearValidator(2017))


/*8. Write a function that calculates a number of days to your birthday.

Input: 25 February
Output: 5 days*/

function daysRemaining(birthday, today) {
    var bDaythisYear = new Date(birthday);
    var todaysDay = new Date(today);
    var day = 1000 * 60 * 60 * 24;

    return (bDaythisYear.getTime() - todaysDay.getTime()) / day;

}
console.log(daysRemaining("2021 07 02", "2021 05 23"))


/*9. Write a function that for a given departure and arrival time calculates the time the trip
takes.
Input: 8:22:13 11:43:22
Output: 3 hours 21 minutes 9 seconds
*/

function tripTime(start, end) {

    var enter = "2021-05-23T" + start;
    var enter2 = "2021-05-23T" + end;

    var departure = new Date(enter);
    var arrival = new Date(enter2);
    var timeDiff = arrival.getTime() - departure.getTime();

    var hours = timeDiff / 1000 / 60 / 60;

    var min = hours * 60 - Math.round(hours) * 60

    var sec = min * 60 - Math.round(min) * 60;

    return Math.round(hours) + " hours " + Math.round(min) + " minutes " + Math.round(sec) + " seconds";
}

console.log(tripTime('08:22:13', '11:43:22'));

// v.2.

function tripTime(start, end) {

    var departure = new Date(start);
    var arrival = new Date(end);
    var timeDiff = arrival.getTime() - departure.getTime();

    var hours = timeDiff / 1000 / 60 / 60;

    var min = hours * 60 - Math.round(hours) * 60

    var sec = min * 60 - Math.round(min) * 60;

    return Math.round(hours) + " hours " + Math.round(min) + " minutes " + Math.round(sec) + " seconds";
}

console.log(tripTime('2021-05-23T08:22:13', '2021-05-24T11:43:22'));


/*
10.
a. Write a constructor function that creates points in space. Each point in space has
its own x, y, and z coordinate. For example, (3, 5, 1) can be a point in space.
b. Write a function that calculates the distance between two points in the space.
*/

// a

function PointsInSpace(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
}

var point1 = new PointsInSpace(3, 5, 1);
console.log(point1);
var point2 = new PointsInSpace(4, 6, 2);
// b

function calculateDistance(point1, point2) {
    return Math.sqrt(Math.pow((point2.x - point1.x), 2) + Math.pow((point2.y - point1.y), 2) + Math.pow((point2.z - point1.z), 2));
}
console.log(calculateDistance(point1, point2))


/*
11.
a. Write a function that generates a random integer value between 5 and 20.
b. Write a function that generates a random integer value between 50 and 100.
c. Write a function which expects a number and a callback generator function and
returns an array of numbers produced by the generator function.
*/

// a

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
console.log(randomInteger(5, 20));

// b

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
console.log(randomInteger(10, 100));


// c

function generateNumbers(number, action) {
    var newArr = [];
    for (var i = 0; i < number; i++) {
        newArr.push(action(2, 100));
    }
    return newArr;
}
console.log(generateNumbers(10, randomInteger));


// v.2.

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


function generateNumbers(number, action) {
    var newArr = new Array(number);
    for (var i = 0; i < number; i++) {
        newArr[i] = new Array(1).fill(action(2, 10));
    }
    return newArr.flat();
}
console.log(generateNumbers(10, randomInteger));