1. What are the eight data types in JavaScript?

a. String
b. Boolean
c. Number
d. null
e. undefined
f. symbol
g. object
h. bigint

2. Which data type is NOT primitive?

Object

3. What is the relationship between null and undefined?

In my understanding, both null and undefined represent nothing or absence of a value, but there is a difference, undefined means variable exists but has not been assigned a value (unintentional) while null means variable has been explicitly assigned to "no value" (it is intentional) their relationship indicate lack of value but in different ways.

4. What is the difference between single, double, and backtick quotes for strings?

Single and Double Quotes is used for basic string creation, interchangeable with escaping needed for quotes within strings

Backticks is used for template literals, allowing multi line strings and string interpolation

Choose single/double quotes based on preference for simple strings and use backticks when you need more advanced string manipulation

Single quoutes vs Double quotes

if you use single quotes, you can not use single quotes within that string without escaping them using a backslash \

e.g var name = 'I'm Chameera'
console.log(name)

this will cause an error

so you have to do this instead

e.g var name = 'I\'m Chameera'
console.log(name)

same for double quotes

e.g var name = ""My Name is "Chameera""
console.log(name)

this will cause error

so you have to do this instead

e.g var name = ""My Name is \"Chameera\""
console.log(name)

you can use single quotes inside double quotes or vice versa

var name1 = "I'm Chameera"
var name2 = 'My Name is "Chameera"'

console.log(name1)
console.log(name2)

5. What is the term for joining strings together?

concatenation

6. Which type of quote lets you embed variables/expressions in a string?

It is called template literals which is also known as template strings which allows variables and expression in a string, and the type of quotes it uses is backticks ``

7. How do you use escape characters in a string?

Either use backlash or use different quotes on the string to diffrentiate for example 'He said "i like this food"

8. What is the difference between the slice/substring string methods?

slice() will extract part of string and returns extracted part in a new string, if index is negative then it will count from the back of that words

e.g
let text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);

let text = "Hello, World!";
console.log(text.slice(0, 5)); // Output: "Hello"
console.log(text.slice(-6, -1)); // Output: "World"


Substring is also similiar but the difference is slice supports negative index while substring doesnt, substring also automatically swap values if start is more bigger than end while slice doesnt

e.g

let text = "Hello, World!";
console.log(text.substring(0, 5)); // Output: "Hello"
console.log(text.substring(5, 0)); // Output: "Hello" (urutan otomatis ditukar)
console.log(text.substring(-3, 5)); // Output: "Hello" (negatif dianggap 0)

9. What are the three logical operators, and what do they stand for?

|| OR

&& AND

! NOT

10. What are truthy and falsy values?

Truthy values (Anything that is not falsy)

- Non empty strings like "Hello"
- Non zero numbers like 42, -3.14
- Arrays []
- Objects {}
- Functions function(){}

Falsy values

Value that is considered false when evaluated in a boolean context.

- false (literal boolean false)
- 0 (number zero)
- -0 (negative number zero)
- null
- undefined
- NaN (Not a Number)

11. What are conditionals?

Conditionals are statements that allow code to make decision based on certain condition, the program will execute different code paths depending on whether a condition evaluates to true or false


12. What is the syntax for an if/else conditional?


if (condition) {
  /* code to run if condition is true */
} else {
  /* run some other code instead */
}

source: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Conditionals#basic_if...else_syntax


13. What is the syntax for a switch statement?

switch (expression) {
    case choice1
    break
    case choice2
    break
    so...on
    default 
    break
}

https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Conditionals#switch_statements


14. What is the syntax for a ternary operator?

const move = isCarMoving ? `The car is currently moving` : `Car is stationary`

The condition after question mark is if its true, so its in a sence where if its true it will show the first value, if its false it will show the second value

15. What is nesting?

Nesting refers to placing one structure inside another of the same type, in JavaScript it means putting one statement or bloack of code inside another like nested conditionals, loops, or functions.

Nested Conditionals

Example of Nested Conditionals

```js
let age = 24

let hasMoney = true

let money = 20000

if (age > 20) {
    if (hasMoney) {
        if (money > 0) {
            console.log("Your bank has been charged successfully")
        } else {
            console.log("Make sure you have enough money")
        }
    } else {
        console.log("You do not have enough money")
    }
} else {
    console.log("You are not old enough")
}


```


Example of Nested Loops

```js

for (let i = 0; i <= 3; i++) {
    for(let j = 0; j <= 2; j++) {
        console.log(`Halo i ${i} dan j${j}`)
    }
}


```

Example of Nested Functions

```js

function outerFunction(name) {
    function innerFunction(greeting) {
        console.log(`${greeting}, ${name}!`);
    }
    innerFunction("Hello");
}

outerFunction("Who?");


```