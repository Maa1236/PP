/*1. Write a JavaScript function that reverses a number. typeof result of the function should
be “number”.
12345 -> 54321 */

function reverse(num) {
    return parseFloat(num.toString().split("").reverse().join(""));
}
console.log(reverse(12345));


/*2. Write a JavaScript function that returns a passed string with letters in alphabetical order.
Note: Assume punctuation, numbers and symbols are not included in the passed string.
“Webmaster” -> “abeemrstw”*/

function alphabeticalOrder(string) {
    return string.toLowerCase().split('').sort().join('');
}
console.log(alphabeticalOrder("Webmaster"))


/* 3. Write a function to alphabetize words of a given string. Alphabetizing a string means
rearranging the letters so they are sorted from A to Z.
"Republic Of Serbia" -> "Rbceilpu Of Sabeir"
*/

function alphabetize(string) {
    var temp = string.split(" ").map(function(el) {
        return el.split('').sort().join('');
    });
    return temp.join(' ');
}
console.log(alphabetize("Republic Of Serbia"))


/*4. Write a function to split a string and convert it into an array of words.
"John Snow" -> ['John','Snow' ]*/

function stringToArray(string) {
    return string.split(" ");
}
console.log(stringToArray("John Snow"))

/*5.Write a function to convert a string to its abbreviated form.
 "John Snow" -> "John S."*/

function johnSnow(string) {
    var temp = string.split(" ");
    return temp[0] + " " + temp[1].slice(0, 1) + ".";

}
console.log(johnSnow("John Snow"));