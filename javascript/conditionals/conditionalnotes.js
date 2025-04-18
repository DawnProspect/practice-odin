// * COMPARISONS

/* 

Kita tau comparison operators dari matematika

Di dalam javascript comparison operatos ditulis dalam bentuk seperti ini:

JavaScript:

Greater than: a > b
Less than: a < b

Greater than or equals: a >= b
Less than or equals: a <= b

Equals
a == b kalau dua atau tiga sama dengan itu kesamaan/membandingkan sedangkan kalau = (sama dengan satu saja) itu assign value

Not Equals
a != b

Semua comparison operators pasti mengembalikan value boolean

true artinya benar
false artinya salah

misalnya:

alert ( 2 > 1 ) jawabannya true
alert ( 2 == 1 ) jawabannya false
alert ( 2 != 1 ) jawabannya true

bisa juga begini
let result = 5 > 4
alert(result) jawabannya true

*/


/* 

Resource belajar yang enak

https://javascript.info/comparison

*/

// ! PEMISAH

// * STRING COMPARISON

/* 

Di dalam comparison string, JavaScript akan membandingkan dengan urutan di dictionary

misalnya:

alert( 'Z' > 'A' ) jawabannya true
alert ("Glow" > "Glee" ) jawabannya true
alert ( "Bee" > "Be" ) jawabannya true

Algorithma untuk membandingkan kedua string ini gambarannya seperti ini:
1. Membandingkan karakter/huruf pertama di kedua string
2. Jika karakter pertama dari string pertama lebih besar atau lebih kecil dari string kedua maka string pertama lebih besar atau lebih kecil dari string kedua, disini proses perbandingannya akan stop
3. Jika kedua karakter pertama kedua string sama, maka perbandingan akan dilanjutkan ke karakter/huruf kedua dengan cara yang sama
4. Akan diulang sampai akhir string prosesnya
5. Jika kedua string memiliki panjang yang sama, maka mereka akan sama, selain itu string yang lebih panjang

Contohnya perbandingan Z > A, itu jawabannya true karena A itu letaknya di awal dibandingkan Z yang paling akhir dari huruf

Kedua contoh Glow > Glee
Itu langkahnya lumayan panjang

1. Pertama bandingin G, karena G string satu sama G string dua sama lanjut
2. kedua bandingin l dan l, itu juga sama
3. baru dibandingin e dengan 0, disini baru bandingkan dan ternyata o lebih besar dibandingkan e, maka jadinya string pertama lebih besar

Namun ada catatan juga untuk perbandingan kalau huruf kapital misalnya A dibandingkan dengan huruf kecil a, itu pasti tidak sama, lalu siapa yang paling besar? yang paling besar si lowercasenya karena di internal encoding table JavaScript pakai Unicode

*/

// ! PEMISAH

// * COMPARISON OF DIFFERENT TYPES

/* 

Ketika membandingkan type value yang berbeda, JavaScript akan convert value nya ke angka

misalnya

alert( '2' > 1 ) jawabannya pasti true karena string '2' dijadikan angka

alert( '01' == 1 ) jawabannya pasti true karena string '01' dijadikan angka

Untuk boolean values true menjadi 1 dan false menjadi 0

alert( true == 1 ) // true
alert( false == 0 ) // true

*/

// ! PEMISAH

// * STRICT OF EQUALITY

/* 

Regular equality (==) itu ada masalah, dia tidak bisa membedakan 0 dengan false

alert( 0 == false ) // true

alert('' == false ) // true

ini terjadi karena value yang dibandingkan akan di convert sama operator ==. Seperti yang ditunjukkan, empty string itu akan di convert menjadi 0

Terus kalau misalnya kita mau membedakan 0 dari false bagaimana?

disini kita menggunakan strict equality (===)

dengan strict equality operator ini === dia akan mengecek kesamaan tanpa akan mengkonversi type data

Dalam hal lain jika a dan b adalah value tipe yang berbeda maka a === b akan mengembalikan false tanpa konversi tipe datanya

misalnya alert( 0 === false ) pasti hasilnya akan false karena berbeda type

ada juga namanya strict non-equality operator !== yang berkaitan dengan !=

strict equality operator memang lebih panjang untuk ditulis, tetapi membuat kita lebih pasti apa yang dibandingkan dan juga memperkecil kemungkinan untuk error

*/

// ! PEMISAH

// * COMPARISON WITH NULL AND UNDEFINED

/* 

Untuk strict equality check ===

Values nya berbeda karena type mereka berbeda

alert(null === undefined ) hasilnya false

kalau untuk non-strict check ==

Anehnya untuk non-strict check mereka sama kecuali value yang lain

alert( null == undefined ) hasilnya true

Kalau untuk perbandingan matematika dan lain lainnya

null/undefined akan di convert menjadi angka

null menjadi 0
undefined menjadi NaN

Contoh aneh

alert( null > 0 ) jawabannya false
alert( null == 0 ) jawabannya false
alert ( null >= 0 ) jawabannya true

alasan yang terakhir menjadi true karena null di convert menjadi 0

*/

// ! PEMISAH

// * SUMMARY

/* 

- Perbandingan akan mengembalikan value boolean
- Strings dibadingkan satu satu huruf yang ada di kata tersebut
- Ketika menggunakan non strict equality check, perbandingan akan konversi value menjadi angka

*/


// * TASKS
// Comparisons

/* 

1. 5 > 4 True
2. "apple" > "pineapple" false
3. "2" > "12" True
4. undefined == null true
5. undefined === null false
6. null == "\n0\n" false
7. null === +"\n0\n" false


*/

// JAWABAN

/* 


    Obviously, true.
    Dictionary comparison, hence false. "a" is smaller than "p".
    Again, dictionary comparison, first char "2" is greater than the first char "1".
    Values null and undefined equal each other only.
    Strict equality is strict. Different types from both sides lead to false.
    Similar to (4), null only equals undefined.
    Strict equality of different types.


*/