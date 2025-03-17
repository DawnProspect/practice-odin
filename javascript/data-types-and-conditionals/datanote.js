// * 8 Tipe data di JavaScript

/* 

OVERVIEW

NUMBER

BIGINT

STRING

BOOLEAN

NULL VALUE

UNDEFINED VALUE

OBJECTS AND SYMBOLS

TYPEOF OPERATOR


Setiap value di javascript pasti memiliki tipe contohyna string/number, maka dari itu kita coba pelajari tipe data data ini
*/

// ! PEMISAH

// * NUMBER
/* 

Number type bisa representasi integer dan floating point numbers

misalnya

let n = 123

n = 12.345

Lalu banyak operations untuk angka juga seperti multiplication *, division /, addition +, subtraction -, 

Di tipe data ini juga ada namanya special numeric values yaitu Infinity, -Infinity, dan NaN

- Infinity: merepresentasikan infinity dari matematika yang memiliki value lebih besar dari angka berapapun

misalnya:

alert( 1 / 0 ) hasilnya Infinity

atau

alert( Infinity ) hasilnya juga sama Infinity

- NaN: NaN itu tanda bahwa ada computational error, karena hasil suatu perhitungan yang salah atau undefined

misalnya:

alert ( "Not a number" / 2 ) pasti hasilnya NaN karena membagi string dengan angka akan membuat komputer bingung

*/

// ! PEMISAH

// *BigInt

/* 

Tipe data bisa menyimpan integer yang besar sampai 1.7976931348623157 * 10308 tetapi diluar integer yang aman ±(253-1) akan ada error, karena tidak semua digit bisa disimpan

Kenapa tipe data ini diperlukan? biasanya butuh buat cryptography atau timestamp yang sampai menghitung microsecond

Tipe data BigInt biasanya ada n di akhir integer

the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;

*/

// ! PEMISAH

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

// * Cara pakai tanda petik beneran di strings bagaimana?

const exampleQuotes1 = `He said "I think this is fine"`
const exampleQuotes2 = 'He said "I think this is fine"'

// * Kalau mau menambah tipe data numbers + strings? Hasilnya seperti apa?

const myString = 123
const word = "Front "

// Hasilnya pasti "Front 123"
console.log(word + myString)

// * NOTE: Penting belajar javascript string methods untuk menyelesaikan masalah (link w3schools ada dibawah)

// ! PEMISAH

// * BOOLEAN (LOGICAL TYPE)

/* 

Boolean type itu hanya punya dua values, antara true dan false

tipe ini seringnya dipakai untuk values yang sifatnya true (artinya benar) atau false (artinya salah)

misalnya

let nameFieldChecked = true // ini tandanya name field sudah dicek karena true
let ageFieldChecked = false // ini tandanya age field belum dicek karena false

Boolean values juga sering digunakan untuk perbandingan/comparisons

let isGreater = 4 > 1;

alert(isGreater) hasilnya harusnya true karena 4 lebih besar dari 1

*/

// ! PEMISAH

// * NULL

/* 

null value ini tidak dimiliki oleh type data apapun. Hanya membuat type tersendiri yang isinya hanya null

seperti dokumentasi katakan null itu hanya special value yang merepresentasikan kosong, empty, nothing, value unknown.


Contohnya

let age = null

maka age itu null

*/

// ! PEMISAH

// * UNDEFINED VALUE

/* 

undefined value juga hampir sama dengan null karena dia bukan milik siapapun dan hanya tipe tersendiri

arti undefined juga value is not assigned yang artinya variablenya ada tetapi tidak di assigned maka valuenya jadi undefined

misalnya

let age;

alert(age) ini nanti hasilnya undefined

*/

// ! PEMISAH

// * OBJECTS AND SYMBOLS

/* 

object type juga special, semua tipe data lain di panggil primitive kare value mereka hanya bisa menyimpan satu tipe data, sedangkan object bisa menyimpan koleksi data dan entitas yang lebih complex.

sedangkan symbol type dibuat sebagai identitas unik untuk objects.

*/

// ! PEMISAH

// * TYPEOF OPERATOR

/* 

typeof berguna ketika kita mau memproses suatu value yang memiliki tipe berbeda atau hanya ingin sekedar melakukan cek secara cepat.

misalnya:

typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)

*/

/* 

Source belajar yang bagus

https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Strings#numbers_vs._strings

https://javascript.info/types

https://www.petanikode.com/javascript-variabel/


JAVASCRIPT STRING METHODS

https://www.w3schools.com/js/js_string_methods.asp#mark_length

https://www.w3schools.com/jsref/jsref_obj_string.asp



*/
