# Javascript

## Rangkuman

## Declaration

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

## Comments

Sebuah komentar akan dilewatkan oleh interpreter atau compiler, sehingga tidak akan memengaruhi alur program yang kita tulis. Komentar ini bisa digunakan sebagai dokumentasi atau penjelasan dari kode yang kita tulis.
terdapat 2 metode untuk menuliskan comments

- // ini merupakan comentar satu baris
- /*Ini merupakan comentar untuk beberapa baris
  */

## Variable

Pada javascript setidaknya ada 3 cara untuk mendeklarasikan sebuah variable,

1. var
2. let
3. const

`let nama = "Naufal"`
`console.log=(nama)` maka hasilnya `naufal`

## Tipe Data

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

## Assignment Operator

Operator ini digunakan untuk memberikan nilai pada variabel.
`x = x + y` sama dengan
`x += y`

## Comparasion Operator

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

## Loop

Loop adalah untuk perulangan code supaya tidak perlu melakukan code satu-satu untuk melakukan perulangan. Contoh perulangan:

1. for loop

```js
for(inisialisasi variabel; test kondisi; perubahan nilai variabel) {
    do something
}
```

1. For of Loop, Cara lain dalam melakukan looping adalah menggunakan for..of. For of mulai hadir pada ECMAScript 2015 (ES6). Cara ini jauh lebih sederhana dan modern dibanding for loop biasa. Sintaks dasar dari for of loop adalah seperti ini:

```js
for(arrayItem of myArray) {
    do something
}
```

2. While and do-while, Metode lain untuk melakukan looping adalah dengan statement while. Sama seperti for, instruksi while mengevaluasi ekspresi boolean dan menjalankan kode di dalam blok while ketika bernilai true.
contoh :

```js
let i = 1;

while (i <= 100) {
  console.log(i);
  i++;
}
```

```js
let myArray = ["Luke", "Han", "Chewbacca", "Leia"];

for(const arrayItem of myArray) {
  console.log(arrayItem)
}
```

## Array

Array merupakan tipe data yang dapat mengelompokkan lebih dari satu nilai dan menempatkannya dalam satu variabel. Contoh:

```js
let myArray = ["Cokelat", 42.5, 22, true, "Programming"];
console.log(myArray);
```

output `"Cokelat", 42.5, 22, true, "Programming"`

Perbedaan array dengan object adalah data pada array disusun secara berurutan dan diakses menggunakan index. Untuk mengakses nilai di dalam array, kita gunakan tanda kurung siku `[]` yang di dalamnya berisi angka yang merupakan posisi nilai yang ingin diakses.

contoh:

`console.log(myArray[1])` ouput `42.5`

### Menambahkan array

Untuk menambahkan sebuah array pada akhir index

```js
myArray.push('index baru')
console.log(myArrray) output `Cokelat", 42.5, 22, true, "Programming", "index baru"`
```

### Mengeluarkan array

Sedangkan untuk mengeluarkan data atau elemen terakhir dari array, kita bisa gunakan metode pop().

```js
const myArray = ["Cokelat", 42.5, 22, true, "Programming"];

myArray.pop();
console.log(myArray);
```

output `[ Cokelat, 42.5, 22, true ]`

### shift() dan unshift()

Metode shift() digunakan untuk mengeluarkan elemen pertama dari array, sementara unshift() digunakan untuk menambahkan elemen di awal array.

```js
const myArray = ["Cokelat", 42.5, 22, true, "Programming"];

myArray.shift();
myArray.unshift("Apple");

console.log(myArray);
```

output `[ 'Apple', 42.5, 22, true, 'Programming' ]`

### delete array

untuk menghapus array dapat menggunakan keyword `delete`

```js
const myArray = ["Cokelat", 42.5, 22, true, "Programming"];

delete myArray[1];
console.log(myArray);
```

output `[ 'Cokelat', <1 empty item>, 22, true, 'Programming' ]`

Namun, perhatikan di sini bahwa keyword delete hanya menghapus data pada index yang ditentukan lalu membiarkan posisi tersebut kosong. Untuk menghapus elemen, gunakan metode `splice()` seperti ini:

```js
const myArray = ["Cokelat", 42.5, 22, true, "Programming"];

myArray.splice(2, 1);   // Menghapus dari index 2 sebanyak 1 elemen
console.log(myArray);
```

Selain untuk menghapus elemen pada array, `splice()` juga dapat digunakan untuk menambahkan elemen pada array tersebut. Caranya dengan memberikan argumen ke-3 (atau selanjutnya, bersifat variadic) sebagai nilai yang akan dimasukan pada index yang diberikan pada argumen pertama.

```js
const month = ['January', 'March', 'April', 'May'];
console.log('before splice: ', month);

month.splice(1, 0, 'February');
console.log('after splice: ', month);
```

output `before splice:  [ 'January', 'March', 'April', 'May' ]` `after splice:  [ 'January', 'February', 'March', 'April', 'May' ]`

## Object

Untuk menetapkan objek pada sebuah variabel kita gunakan tanda kurung kurawal `{}`.

`const user = {}`

Object berisi pasangan `key` dan `value` yang juga dikenal dengan property. Key berperan mirip seperti nama variabel yang menyimpan sebuah nilai. Sementara, value berisi nilai dengan tipe data apa pun termasuk objek lain. Key dan value di dalam object dituliskan seperti berikut:

`let object = {key1: "value1", key2: "value2", key3: "value3"}`

key harus berupa string dan dituliskan titik dua(:) lalu diikuti valuenya

```js
const user = {
    nama: "Naufal",
    umur: 20,
    asal: "Semarang",
    maried: false
}

console.log("Halo nama saya ${user.nama} umur saya ${user.umur} asal saya ${user.asal}")
```

## Scoping

Scoping menentukan dimana variabel, fungsi dan objek diatur dan dapat diakses dalam kode. Ini berarti ruang lingkup variabel dikendalikan oleh lokasi deklarasi variabel

## Hoisting

Hoisting membuat beberapa jenis variabel atau fungsi dapat diakses/digunakan dalam kode sebelum dideklarasikan

Deklarasi var dan function adalah hoisted, oleh karena itu mereka dapat digunakan bahkan sebelum deklarasi itu sendiri terjadi

## DOM (Document Object Model)

Document Object Model adalah API untuk HTML yang merepresentasikan halaman web pada suatu dokumen menjadi sebuah object

### DOM Selection Method

- getElementByID() = Element
- getElementByTagName() = HTMLCollection
- getElementByClassName() = HTMLCollection
- querySelector() = Element
- querySelectorAll() = nodeList

```html
<h1 id="topik">Hello World</h1>
```

```js
const topik = document.getElementById('topik')
console.log(topik)
```

### DOM Manipulation

- element.innerHTML = Digunakan merubah isi dari tag yang sudah diseleksi
- element.style.propertyCSS = Digunakan merubah style dari tag yang sudah diseleksi
- element.setAttribute()  = Digunakan mengelola / memanipulasi attribtue yang sudah di seleksi
- element.classList.add() = Digunakan mengelola / memanipulasi class yang sudah di seleksi

```html
<h1 id="topik">Hello World</h1>
```

```js
const topik = document.getElementById('topik')
topik.innerHtml = 'Naufal' //Merubah isi dari Tag
topik.style.color = 'red' //merubah style pada tag
```

### DOM Event

- onClick = digunakan ketika pengguna mengklik mouse
- onChange = Digunakan dalam kombinasi dengan validasi bidang input
- onBlur = Digunakan ketika user meninggalkan kolom input
- onmouseOver = Digunakan ketika pengguna mengarahkan mouse keluar pada suatu object
- onCopy = Digunakan ketika pengguna mengcopy suatu object

- Event Handler
  - Inline HTML Attribute
  - Element Method
- addEventListener()

```html
<h1 id="topik" onclick="ubahWarna">Hello World</h1>
<p class="p1">Lorem Ipsum</p>
```

```js
const topik = document.getElementById('topik')
let ubahWarna = () => {
  topik.style.color = 'red'
}

const p1 = document.querySelector(.p1)
p1.addEventListener('click', () => {
  alert('Click di paragraf 3 check')
})
```
