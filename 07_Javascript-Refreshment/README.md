# Javascript

## Rangkuman

### Declaration

Declaration adalah proses pembuatan variabel untuk menyimpan data
**Contoh**

- var
- let
- Const
const digunakan saat kita membutuhkan nilai yang tidak bisa diulang
let digunakan saat membutuhkan nilai yang dapat diubah
var saat ini jarang digunakan
`var name = 'naufal'`

`console.log` adalah kode bawaan JavaScript untuk menampilkan pesan ke konsol, bisa berupa web konsol atau konsol dari terminal/command prompt.

### Comments

Sebuah komentar akan dilewatkan oleh interpreter atau compiler, sehingga tidak akan memengaruhi alur program yang kita tulis. Komentar ini bisa digunakan sebagai dokumentasi atau penjelasan dari kode yang kita tulis.
terdapat 2 metode untuk menuliskan comments

- // ini merupakan comentar satu baris
- /*Ini merupakan comentar untuk beberapa baris
  */

### Variable

Pada javascript setidaknya ada 3 cara untuk mendeklarasikan sebuah variable,

1. var
2. let
3. const

`let nama = "Naufal"`
`console.log=(nama)` maka hasilnya `naufal`

### Tipe Data

Tipe data ini terbentuk ketika sebuah variabel tidak memiliki nilai. Artinya, ketika kita mendeklarasikan variabel tanpa menginisialisasikan nilainya, variabel tersebut menjadi undefined.
contoh :
`let x;`
`console.log(x)` = `undifined`

**Numbers**
Nilai dari tipe data number adalah angka. Variabel bertipe data number dituliskan seperti angka pada umumnya:
`let x = 10`
jika desimal maka bisa menggunakan `.`
`let y = 10.9`

**Aritmatika**
-. + = penjumlahan
2. - = pengurangan
3. / = pembagian
-. * = perkalian
5. % = sisa bagi
6. ** = pangkat

contoh :
`let x = 10`
`let y = 5`
`console.log(x + y)` output `15`

Pada operator aritmatika juga terdapat operator increment (++) dan decrement (--). Operator increment dan decrement digunakan untuk menambahkan atau mengurangi nilai 1 pada nilai variabel yang ada sekarang.

Operator ini dapat dituliskan sebelum atau sesudah variabel, tetapi hal tersebut bukan berarti sama. Berikut ketentuannya:

Jika dituliskan setelah variabel (x++), expression akan menghasilkan nilai variabel sebelum ditingkatkan nilainya.
Jika dituliskan sebelum variabel (++x), expression akan menghasilkan nilai variabel setelah ditingkatkan nilainya.
contoh:
`let positif = 5`
`console.log(positifx++)` output 5
`console.log(positif)` output 6, karena sudah ditambah 1 atau increment pada penugasan sebelumya

### Assignment Operator

Operator ini digunakan untuk memberikan nilai pada variabel.
`x = x + y` sama dengan
`x += y`

### Comparasion Operator

1. `==` Membandingkan kedua nilai apakah sama (tidak identik).
2. `!=` Membandingkan kedua nilai apakah tidak sama (tidak identik).
3. `===` Membandingkan kedua nilai apakah identik.
4. `!==` Membandingkan kedua nilai apakah tidak identik.
5. `>` Membandingkan dua nilai apakah nilai pertama lebih dari nilai kedua.
6. `<` Membandingkan dua nilai apakah nilai pertama kurang dari nilai kedua.
7. `>=` Membandingkan dua nilai apakah nilai pertama lebih dari sama dengan nilai kedua.
8. `<=` Membandingkan dua nilai apakah nilai pertama kurang dari sama dengan nilai kedua.

### If/else statement

![alt text](img/../Praktikum/img/ifelse.png)
Statement if akan menguji suatu kondisi. Jika kondisi bernilai true, maka blok kode di dalamnya akan dijalankan. Sebaliknya, jika bernilai false, maka proses yang ditentukan akan dilewatkan.
contoh code:
`const isRaining = true`
`if (isRaining = true) {console.log(Hari ini hujan, jangan lupa bawa payung)}`

Apabila `else`
`let x = 10; if(x = 5) {console.log(x);} else {console.log("Nilai bukan 5")}`

### Loop

Loop adalah untuk perulangan code supaya tidak perlu melakukan code satu-satu untuk melakukan perulangan. Contoh perulangan:

1. for loop = `for(inisialisasi variabel; test kondisi; perubahan nilai variabel) {do something}`
2. For of Loop, Cara lain dalam melakukan looping adalah menggunakan for..of. For of mulai hadir pada ECMAScript 2015 (ES6). Cara ini jauh lebih sederhana dan modern dibanding for loop biasa. Sintaks dasar dari for of loop adalah seperti ini:

`for(arrayItem of myArray) {do something}`

```js
let myArray = ["Luke", "Han", "Chewbacca", "Leia"];

for(const arrayItem of myArray) {
  console.log(arrayItem)
}
```

3. While and do-while, Metode lain untuk melakukan looping adalah dengan statement while. Sama seperti for, instruksi while mengevaluasi ekspresi boolean dan menjalankan kode di dalam blok while ketika bernilai true.
contoh :

```js
let i = 1;

while (i <= 100) {
  console.log(i);
  i++;
}
```

### Scoping

Scoping menentukan dimana variabel, fungsi dan objek diatur dan dapat diakses dalam kode. Ini berarti ruang lingkup variabel dikendalikan oleh lokasi deklarasi variabel

### Hoisting

Hoisting membuat beberapa jenis variabel atau fungsi dapat diakses/digunakan dalam kode sebelum dideklarasikan

Deklarasi var dan function adalah hoisted, oleh karena itu mereka dapat digunakan bahkan sebelum deklarasi itu sendiri terjadi
