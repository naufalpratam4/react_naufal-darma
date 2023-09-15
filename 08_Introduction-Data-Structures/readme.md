# Rangkuman

## Data Struktur

- Data adalah cakupan luas merujuk semua tipe informasi yang tersimpan dalam memori komputer
- data strutur adalah bagaimana menyimpan dan mengorganisir data/value/elemen di dalam memori komputer

## Contoh Data Structur

### Array

Array merupakan tipe data yang dapat mengelompokkan lebih dari satu nilai dan menempatkannya dalam satu variabel. Contoh:

```js
let myArray = ["Cokelat", 42.5, 22, true, "Programming"];
console.log(myArray);
```

**Method**

- push()
Fungsi push ini akan menambahkan data di akhir array.

```js
const myArray = ["Cokelat", 42.5, 22, true, "Programming"];

myArray.push('JavaScript');
console.log(myArray);
```

- pop()
  
  Sedangkan untuk mengeluarkan data atau elemen terakhir dari array, kita bisa gunakan metode pop().

```js
const myArray = ["Cokelat", 42.5, 22, true, "Programming"];

myArray.pop();
console.log(myArray);
```

- shift()
Metode shift() digunakan untuk mengeluarkan elemen pertama dari array, sementara unshift() digunakan untuk menambahkan elemen di awal array.

```js
const myArray = ["Cokelat", 42.5, 22, true, "Programming"];

myArray.shift();
myArray.unshift("Apple");

console.log(myArray);
```

- unshift()
- delete
menhapus data di array

```js
const myArray = ["Cokelat", 42.5, 22, true, "Programming"];

delete myArray[1];
console.log(myArray);

```

Namun, perhatikan di sini bahwa keyword delete hanya menghapus data pada index yang ditentukan lalu membiarkan posisi tersebut kosong.

- splice

Untuk menghapus elemen, gunakan metode splice() seperti ini:

```js
const myArray = ["Cokelat", 42.5, 22, true, "Programming"];

myArray.splice(2, 1);   // Menghapus dari index 2 sebanyak 1 elemen
console.log(myArray);
```
