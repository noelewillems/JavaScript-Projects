// Learning JS for crochet website project. Very basic things, but helpful for syntax probably.
// Followed along this tutorial: https://www.youtube.com/watch?v=hdI2bqOjy3c

// Variables:
// var (a little antiquated - GLOBAL)
// let (you can reassign values)
// const (not allowed to reassign values - FINAL - must always initialize)
// Always use const unless you know you're going to reassign the values

// Datatypes:
// Strings, Numbers, Boolean, null, undefined, Symbol
// No technical floats/doubles, only numbers
const name = "Goo goo ga ga";
const age = "100"
const isCool = false;
const weight = 239.1;
const x = null;
const y = undefined;
let z;
console.log(typeof name);
console.log(typeof weight);


// STRINGS
// Concatenation Method 1 (classic)
console.log("My name is " + name + " and I am " + age + " years old. ");
// Concatenation Method 2 (template)
console.log(`My name is ${name} and I am ${age} years old.`);
const s = "Helloooo";
// String methods for length, subscript, case, split
console.log(s.length);
console.log(s.substring(0, 5).toUpperCase());
console.log(s.split(''));
const r = "cats, mice, bob";
console.log(r.split(', '));


// ARRAYS
const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);
// Arrays do NOT have to be the same data type. Also don't require size
const fruits = ["apples", "oranges", "pears", 10, true];
console.log(fruits);
console.log(fruits[1]);
// You can add values to the array via index
fruits[5] = "grapes";
console.log(fruits);
// You can add values to the end of the array via push
fruits.push("bananas");
console.log(fruits);
// You can add values to the beginning of the array via unshift
fruits.unshift("blackberries");
console.log(fruits);
// Remove last element of array
fruits.pop();
console.log(fruits);
// Check if array
console.log(Array.isArray(fruits));
// Get index of something
console.log(fruits.indexOf("blackberries"));


// OBJECT LITERALS
const blackberry = {
    color: "Black",
    price: 4.50,
    locations: ['mountains', 'meadows', 'farms'],
    // Embedded objects
    variety: {
        name: "Hull Thornless",
        flavor: "bitter"
    }
}
console.log(blackberry);
console.log(blackberry.variety);
console.log(blackberry.price, blackberry.locations);