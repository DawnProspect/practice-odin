// * 8 Tipe data di JavaScript

// * STRINGS

// * Strings itu data berupa teks
// ? Contohnya:
const string = "the revolution will not be televised"
console.log(string)

// * Kalau mau coba jalanin node datenote.js

// * Strings bisa dalam bentuk 3 kutipan
// ? Contohnya:
// 'the revolution will not be televised' // single quotes atau tanda petik
// "the revolution will not be televised" // double quotes atau tanda petik ganda
// `the revolution will not be televised` // backtics atau tanda kutip terbalik

/*

! disini ada aturannya kita hanya boleh pakai karakter/simbol yang sama, tidak boleh seperti ini

const badQuotes = 'This is not allowed!";

*/

/* 

Khusus untuk string yang menggunakan backtick, bisa disebut string yang spesial yang disebut dengan template literal, dia sebenarnya mirip sama string normal pada umumnya tetapi dia punya properti special, misalnya kamu bisa embed JavaScript di dalam itu dan kamu bisa menggunakan template literals di di banyak line kode

*/

// Contoh Embedding JavaScript pakai template literalls

const name = "Ghost"
const greeting = `Hello, ${name}`
console.log(greeting, "<< Contoh embedding JavaScript")
// * Kalau mau coba jalanin node datenote.js

// * Ada metode lain pakai concatenation seperti ini

const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`;
console.log(joined); // "Hello, how are you?"

// * Di template literals kamu bisa pakai JavaScript expressions, variables dan hasilnya juga akan termasuk di resultnya seperti

const car = "toyota yaris"
const score = 9
const highestScore = 10

const output = `I like the car called ${car}. I gave it a score of ${(score / highestScore) * 100}%`

console.log(output,"contoh output JavaScript Expressions")

// * Di template literals mereka juga bisa menggunakan line breaks (kalau teks kepanjangan bisa di enter misalnya seperti)

const myNewLine = `One day you finally knew 
what you had to do, and began,`;

console.log(myNewLine, "<< Contoh output newLine")

// Sedangkan kalau pakai doublequotes / tanda petik harus pakai /n

const newline = "One day you finally knew\nwhat you had to do, and began,";
console.log(newline);

/* 

Source belajar yang bagus

https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Strings#numbers_vs._strings


*/
