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