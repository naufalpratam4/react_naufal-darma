## Rangkuman

**Cascading Style Sheets (CSS)** merupakan bahasa pemrograman yang digunakan dalam pengembangan web untuk mengontrol tampilan visual dari elemen-elemen yang ada dalam halaman web. Dengan menggunakan CSS, pengembang web dapat memberikan gaya, format, dan tata letak yang konsisten dan menarik kepada elemen-elemen HTML, seperti teks, gambar, tombol, dan area lainnya.
Salah satu prinsip fundamental dari CSS adalah pemisahan antara konten (struktur) dan presentasi (tampilan). Hal ini berarti bahwa Anda dapat memisahkan elemen-elemen yang mengandung informasi konten, seperti paragraf teks atau data tabel, dari elemen-elemen yang mengatur tampilan visual seperti warna, ukuran font, margin, dan sebagainya. Dengan pemisahan ini, Anda dapat memodifikasi atau mengubah tampilan halaman web tanpa mengganggu struktur kontennya, yang sangat membantu dalam mempertahankan fleksibilitas dan kemudahan perubahan.

Cara menambahkan file CSS ada 3 macam yaitu:

1. Internal CSS
   Internal CSS adalah metode dalam pengembangan web di mana gaya atau properti CSS didefinisikan langsung di dalam bagian <style> dari dokumen HTML. Gaya-gaya ini berlaku hanya untuk elemen-elemen di dalam halaman HTML yang sama dan tidak akan mempengaruhi halaman lain.
   <head>
        <style>
         h1 {
            color:red;
         }
        </style>
    </head>
2. External CSS
   Eksternal CSS mengacu pada pendekatan di mana gaya atau properti CSS didefinisikan dalam file terpisah dengan ekstensi .css. File ini kemudian dihubungkan (linked) ke dalam halaman HTML menggunakan elemen <link>
   contoh :
   <head>
       <link rel="stylesheet" type="text/css" href="styles.css">
   </head>

3. Inline CSS
   Inline CSS adalah metode dalam pengembangan web di mana gaya atau properti CSS diterapkan langsung pada elemen HTML melalui atribut **style**. Ini berarti gaya didefinisikan di dalam tag elemen itu sendiri, langsung dalam kode HTML, dan akan mempengaruhi hanya elemen yang bersangkutan
   contoh <p style color: red;>inline css</p>

## Syntax CSS

h1 {color: red; font-size: 20px;}
_h1_ sebagai selector
_color: red;_ sebagai declaration
_color_ sebagai properti
_pink_ sebagai value

Penanda HTML ke dalam CSS. Menggunakan selector ID dan CLass

1. ID (#)

   - Setia
   - p elemen hanya dapat memiliki satu tag id
   - Dalam satu halam tidak boleh ada dua penamaan id yang berbeda

2. Class (.)

   - Tag class dengan nama yang sama dapat dipakai berulang-ulang pada satu halaman.
   - Satu elemen boleh memiliki lebih dari satu class yang berbeda-beda
     **contoh**
     _ID (#)_
     HTML
     <div id="nama">naufal</div>
     CSS
     #nama{
        color:red;
     }

     _class (.)_
     HTML
     <div class="nama">naufal</div>
     CSS
     .nama {
        color:red;
     }

## Font Properties

- Font = menetapkan semua properti font dalam satu deklarasi
- font-family = Menentukan kelompok font teks
- font-size = menentukan ukuran font teks
- font-weigth = menentukan ketebalan
- font-style = menentukan font teks menjadi miring

## CSS Margin & Padding

_Margin_ adalah ruang di luar batas elemen. Ini adalah jarak antara elemen dan elemen lain di sekitarnya. Margin dapat digunakan untuk mengatur jarak antara elemen-elemen di dalam tata letak halaman. Anda dapat mengatur margin atas (top), kanan (right), bawah (bottom), dan kiri (left) secara terpisah.

_Padding_ adalah ruang di dalam batas elemen, di antara batas elemen dan kontennya. Ini mengontrol jarak antara konten elemen dan batasnya. Padding digunakan untuk mengatur seberapa jauh konten elemen dari tepi elemen tersebut.

## CSS Background Properties

- background-color = menetapkan warna background
- background-image = menentukan gambar background
- background-repeat = menentukan gambar untuk di ulang
- background-size = menentukan ukuran gambar
- background-position = mengatur posisi awal gambar background
