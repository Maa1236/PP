/*1.Write a function that capitalizes the first letter of each string argument it receives.
Function arguments: ["hello", "there", "ES", 6]
Output: ["Hello", "There", "ES"]*/

let array = ["hello", "there", "ES", 6];
let newArray = [];

const capitalize = (array) => {

    array.forEach(element => {
        if (typeof element === "string") {
            newArray.push(element.split('')[0].toUpperCase() + element.slice(1, element.length));
        }

    });
    return newArray;
}

console.log(capitalize(array))

/*2.Write a function that calculates sale tax that should be paid for the product of the given price.
Use a constant to set a fixed value of the tax rate (i.e. 20% in Serbia).
Input: [{ name: “Banana”, price: 120 }, {name: “Orange”, price: 100}]
Output: [{ name: “Banana”, price: 144 }, { name: “Orange”, price: 120 }] // product full price
Output2: [ 24, 20 ] // tax only*/


const products = [{ name: "Banana", price: 120.23 }, { name: "Orange", price: 100 }];

const productPrice = products.map(product => {
    const { price: prodPrice } = product;
    const newProd = {
        ...product,
        price: parseInt(prodPrice * 1.2),
        tax: parseInt(prodPrice * 0.2)
    }
    return newProd
})

const productTax = products.map(product => {
    const { price: prodPrice } = product;
    const newProd1 = {
        ...product,
        tax: parseInt(prodPrice * 0.2)
    }
    return newProd1.tax
})

console.log(productPrice);
console.log(productTax)

/*3.Write a function that increases each element of the given array by the given value. If the value is
omitted, increase each element of the array by 1.
Input: [4, 6, 11, -9, 2.1], 2
Output: [6, 8, 13, -7, 4.1]*/

let array = [4, 6, 11, -9, 2.1],
    val,
    newArray = [];

const increase = (array, val) => {
    if (!val) {
        newArray = array.map(element => element + 1);
    } else {
        newArray = array.map(element => element + val);
    }
    return newArray;
}

console.log(increase(array, 2))

// v.2

let array = [4, 6, 11, -9, 2.1],
    val,
    newArray = [];

const increase = (array, val) => val ? newArray = array.map(element => element + val) : newArray = array.map(element => element + 1)

console.log(increase(array, 2))

/*4.Write a function that filters all even elements of the array.
Input: [6, 11, 9, 0, 3]
Output: [6, 0]*/

let array = [6, 11, 9, 0, 3];

const filterEven = (array) => array.filter(el => el % 2 === 0);

console.log(filterEven(array));

/*5.Write a function that filters all the strings from the given array that contain substring JS or js.
Input: ["compiler", "transpiler", "babel.js", "JS standard", "linter"]
Output: ["babel.js, "JS standard"]*/

let array = ["compiler", "transpiler", "babel.js", "JS standard", "linter"];
let arrayCopy = [...array];
let lowerArray = [];
let resultArray = [];
let js;

const filterWords = (array, js) => {
    arrayCopy.forEach(element => {
        lowerArray.push(element.toLowerCase())
    });
    const result = lowerArray.filter(el => el.includes(js))
    result.forEach(el => {
        array.forEach(el1 => {
            if (el === el1.toLowerCase()) {
                resultArray.push(el1);
            }
        });
    });
    return resultArray;
}
console.log(filterWords(array, "js"))

//v.2.

let array = ["compiler", "transpiler", "babel.js", "JS standard", "linter"];
let filteredArray = [];
let val;

const filterWords = (array, val) => {

    array.forEach(el => {
        for (let i = 0; i < el.length; i++) {
            if ((el[i] === val[0] || el[i] === val[0].toUpperCase()) && (el[i + 1] === val[1] || el[i + 1] === val[1].toUpperCase())) {
                filteredArray.push(el);
            }
        }
    });
    return filteredArray;
}

console.log(filterWords(array, "js"))

/*6. Write a function that filters all integer numbers from the given array.
Input: [1.6, 11.34, 9.23, 7, 3.11, 8]
Output: [7, 8]*/

const filterInt = (array) => array.filter(el => Number.isInteger(el));

console.log(filterInt([1.6, 11.34, 9.23, 7, 3.11, 8]))

/*7.Write a function that filters all integer arguments that contain digit 5.
Function arguments: 23, 11.5, 9, "abc", 45, 28, 553
Output: [45, 553]*/

const filterInt5 = (...numbers) => {
    let result = [];
    let args = [...numbers];

    let filteredArray = args.filter(el => Number.isInteger(el));
    filteredArray.forEach(element => {
        if (element.toString().includes("5")) {
            result.push(element);
        }
    });
    return result;
}

console.log(filterInt5(23, 11.5, 9, "abc", 45, 28, 553));



/*8.Write a function that returns indexes of the elements greater than 10.
Input: [1.6, 11.34, 29.23, 7, 3.11, 18]
Output: 1, 2, 5*/

const searchIndex = (array) => {
    let newArr = [];
    array.forEach(element => {
        if (element > 10) {
            newArr.push(array.indexOf(element));
        }
    });
    return newArr.join(", ");
}
console.log(searchIndex([1.6, 11.34, 29.23, 7, 3.11, 18]))


/*9.
a.Create an array of persons. A person should be an object with name and age properties.
Experiment with enhanced object literals.
b. Write a function that prints out the names of persons older than 25.
c. Write a function that check if there is a person older than 40.
d. Write a function that checks if all persons are older than 20.*/

// a.

let persons = [{ name: "John", age: 23 }, { name: "Jim", age: 26 }, { name: "Marie", age: 44 }]

//b.

const olderThan25 = (array) => array.filter(element => { if (element.age > 25) { console.log(element.name) } });
olderThan25(persons)

// c.

const olderThan40 = (array) => array.some(element => element.age > 40)
console.log(olderThan40(persons))

// d.
const olderPersons = (array) => array.every(el => el.age > 20)

console.log(olderPersons(persons))


/*10Write a function that checks if the given array is an array of positive integer values.
Input: [3, 11, 9, 5, 6]
Output: yes
Input: [3, -12, 4, 11]
Output: no*/

const positiveInteger = (array) => array.every(el => Number.isInteger(el) && Math.sign(el) === 1)

console.log(positiveInteger([3, -11, 9, 5, 6]))

/*11 Write a function that calculates the product of the elements of the array.
Input: [2, 8, 3]
Output: 48*/

const productNum = (array) => array.reduce((x, y) => x * y)
console.log(productNum([2, 8, 3]))

/*12 Write a function that calculates the maximum of the given array.
Input: [2, 7, 3, 8, 5.4]
Output: 8*/

const max = (array) => Math.max(...array)
console.log(max([2, 7, 3, 8, 5.4]))