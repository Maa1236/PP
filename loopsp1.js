/*
Write a program that will iterate from 0 to 10 and display squares of numbers.
*/

for (var i = 0; i < 10; i++) {
    console.log(i * i);
}

/*
1. Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current
number is odd or even, and display a message to the screen.
*/

for (i = 0; i < 15; i++) {
    if (i % 2 == 0) {
        console.log("even")
    } else {
        console.log("odd");
    }

}

/*
2. Write a program to sum the multiples of 3 and 5 under 1000.
*/

var multi = 0;
for (i = 0; i < 1000; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        multi += i;
    }

}
console.log(multi);

/*
3. Write a program to compute the sum and product of an array of integers.
*/

var ar = [1, 2, 3];
var sum = 0;
var prod = 1;

for (i = 0; i < ar.length; i++) {
    sum += ar[i];
    prod *= ar[i];
}

console.log(sum);
console.log(prod);

/*
4. Write a program which prints the elements of the following array as a single string.
var x = [&#39;1&#39;, &#39;A&#39;, &#39;B&#39;, &quot;c&quot;, &quot;r&quot;, true, NaN, undefined];
*/

var x = ['1', 'A', 'B', 'c', 'r', true, NaN, undefined];
var res = "";

for (i = 0; i < x.length; i++) {
    res += x[i] + ",";
}
console.log(res);


/*
5. Write a program that prints the elements of the following array.
var a = [

[1, 2, 1, 24],
[8, 11, 9, 4],
[7, 0, 7, 27]
];
*/

var a = [

    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27]
];


for (i = 0; i < a.length; i++) {
    var sa = a[i];
    for (j = 0; j < sa.length; j++) {
        console.log(sa[j]);
    }
}



/*
6. Write a program that outputs the sum of squares of the first 20 numbers.
*/

var squares = 0;

for (i = 0; i < 20; i++) {
    squares += i * i;

}


console.log(squares);

/*
7. Write a program that computes average marks of the following students. Then use this
average to determine the corresponding grade.

David 80
Marko 77
Dany 88
John 95
Thomas 68
The grades are computed as follows :

&lt; 60% F
&lt; 70% D
&lt; 80% C

&lt; 90% B
&lt; 100% A
*/

var s = [
    ['David', 80],
    ['Marko', 77],
    ['Dany', 88],
    ['John', 95],
    ['Thomas', 68]
];

var grade = 0;

for (var i = 0; i < s.length; i++) {
    grade += s[i][1];
    var res = (grade / s.length);
}

console.log(grade / s.length);

if (res < 60) {
    console.log("F");
} else if (res < 70) {
    console.log("D");
} else if (res < 80) {
    console.log("C");
} else if (res < 90) {
    console.log("B");
} else {
    console.log("A");
}

/*
8. Write a program that uses console.log to print all the numbers from 1 to 100, with two
exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers
divisible by 5 (and not 3), print "Buzz" instead. When you have that working, modify your
program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print
"Fizz" or "Buzz" for numbers divisible by only one of those).
Note: This is actually an interview question that has been claimed to weed out a significant
percentage of programmer candidates. So if you’ve solved it, you’re now allowed to feel
good about yourself.
*/

for (i = 1; i < 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");

    } else {
        console.log(i);
    }
}