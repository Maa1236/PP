/*1. Why pay a fortune teller when you can just program your fortune yourself?
Write a function named tellFortune that:
● takes 4 arguments: number of children, partner&#39;s name, geographic location, job title.
● outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N
kids."
Call that function 3 times with 3 different values for the arguments.
*/

function tellFortune(children, partner, loc, job) {
    return 'You will be a ' + job + ' in ' + loc + ' and married to ' +
        partner + ' ' + ' with ' + children + ' kids.';
}
console.log(tellFortune(9, "Steva", "Minhen", "majstor"));

/* 2. You know how old your dog is in human years, but what about dog years? Calculate it!
Write a function named calculateDogAge that:
● takes 1 argument: your puppy&#39;s age.
● calculates your dog&#39;s age based on the conversion rate of 1 human year to 7 dog years.
● outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
Call the function three times with different sets of values.
Bonus: Add an additional argument to the function that takes the conversion rate of human to dog
years.
*/


function calculateDogAge(age) {
    return "Your doggie is " + age * 7 + " years old in dog years!"
}
console.log(calculateDogAge(7));

/*3. Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
Write a function named calculateSupply that:
● takes 2 arguments: age, amount per day.
● calculates the amount consumed for rest of the life (based on a constant max age).
● outputs the result to the screen like so: "You will need NN to last you until the ripe old age of
X"
Call that function three times, passing in different values each time.
Bonus: Accept floating point values for amount per day, and round the result to a round number.
*/

function calculateSupply(age, amount) {
    var maxAge = 100;
    var supply = amount * 365 * (maxAge - age);
    console.log("You will need " + supply + " to last you until the ripe old age of " +
        age);
}
calculateSupply(34, 2.7);

/*
It's hot out! Let's make a converter based on the steps here.

Create a function called celsiusToFahrenheit:

Store a celsius temperature into a variable.
Convert it to fahrenheit and output "NN°C is NN°F".
Create a function called fahrenheitToCelsius:

Now store a fahrenheit temperature into a variable.
Convert it to celsius and output "NN°F is NN°C."
*/

function celsiusToFahrenheit(C) {
    F = (9 * C / 5) + 32;
    return F;
}
console.log(celsiusToFahrenheit(30));

function fahrenheitToCelsius(F) {
    C = ((F - 32) * 5) / 9;
    return C;
}
console.log(fahrenheitToCelsius(86));