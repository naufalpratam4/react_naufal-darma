# Rangkuman

Frontend adalah sebuah bagian dari website yang membuat tampilan yang menarik kepada user

**HTML (Hypertext Markup Language)** adalah sebuah standar yang digunakan secara luas untuk menambilkan sebuah halaman web

Kegunaan HTML

- Membuat struktur dari halaman website
- Mengatur tampilan dan isi dari halaman web.
- Membuat tabel dengan tag HTML _table._
- Membuat form HTML
- Membuat gambar dengan canvas.
- Mempublikasikan halaman website secara online

HTML Editor = Visual Studio COde, Notepad+, Sublime Text

**CSS (Cascading Style Sheets)** Dapat menghias halaman web (color, size, font, background dll) Dapat mengatur posisi pada halaman web (Float, align, display, position, dll)

Cara menambahkan css pada dilakukan dengan 3 cara yaitu eksternal CSS, internal CSS, dan Inline CSS

**Frontend Framework**
Front End Framework adalah sekumpulan aturan kode yang bisa kita gunakan untuk mempermudah dalam membuat suatu tampilan website

**Bootstrap**
alasan memilih bootstrap yaitu gratis, mudah dipelajari, cepat, mendukung responsif

**Contoh tag HTML**
_Tag DIV_

<div> Content HTML </div>

_Tag Heading_
Heading dibagi dari 1 sampai 6

<h1>Heading satu</h1>
<h6>Heading enam</h6>

_Tag Paragraf_

<p> Paragraf </p>

_Styling pada paragraf HTML_
<strong>Membuat text lebih tebal</strong
<em>Penekanan pada text menjadi italic</em>
<s>Membuat text dengan garis tercoret</s>
<br/>(line break, untuk membuat garis baru)

_Tag Link HTML_
untuk dapat menggunakan link pada HTML dapat menggunakan tag
<a href="LINK"> website yang akan dituju </a>
untuk link dengan membuka tab baru cukup tambahkan target="\_blank"
<a href="LINK" target="_blank"> website yang akan dituju </a>

_Tag image_
image dapat menggunakan tag yaitu <img src="logo.png"/>

_List HTML_
Ada dua jenis list dalam HTML :

1. Ordered List adalah list yang berurut. (<ol>)
2. Unordered List adalah list yang tak terurut. (<ul>)

Setiap list item pada Ordered list dan Unordered List dideklarasikan menggunakan tag (<li>)

contoh

<ol>
	<li>Content</li>
	<li>Content</li>
</ol>
untuk mengganti tipe urutan dari Ordered list menggunakan
<ol type="...">
- type="a"
- type="A"
- type="i"
- type="I"

Contoh Unordered List HTML

<ul>
    <li>Content</li>
    <li>Content</li>
    <li>Content</li>
</ul>
untuk mengganti simbol dari Unordered list menggunakan
<ul type="...">
- type="square"
- type="disc"
- type="circle"

_Tag Table_
Membuat table pada HTML menggunakan tag <table></table>
Setiap baris table di deklarasikan menggunakan <tr></tr>
Setiap kolom table di deklarasikan menggunakan <td></td>
Untuk kolom pada tabel header menggunakan <th></th>

_Tag From HTML_

<form>
    <fieldset>
        <legend>Personal Information</legend>
        <div>
            <label for="full-name">Full Name</label>
        </div>
    </fieldset>
</form>
