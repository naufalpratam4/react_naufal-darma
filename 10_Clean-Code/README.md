# Rangkuman

## Clean Code

Clean Code adalah istilah untuk kode yang mudah dibaca, dipahami dan diubah oleh programmer.

### Karakteristik "Clean Code"

1. Penamaan Mudah dipahami

2. Mudah dieja dan dicari
3. singkat namun mendeskripsikan konteks
4. konsisten
5. Hindari penambahan konteks yang tidak perlu
6. Komentar
7. Good function
8. Gunakan konvensi
9. formatting

### "Clean Code" Principle

**KISS**
Keep It So Simple
Hindari membuat fungsi yang dibuat untuk melakukan A, sekaligus memodifikasi B, mengecek fungsi C, dst

Tips untuk KISS

1. Fungsi atau class harus kecil
2. Fungsi dibuat untuk melakukan satu tuas saja.
3. Jangan gunakan terlalu banyak argumen pada fungsi
4. Harus diperhatikan untuk mencapai kondisi yang seimbang
5. Harus diperhatikan untuk mencapai kondisi yang seimbang, kecil dan jumlahnya minimal.

**DRY**
Don't Repeat Yourself

Duplikasi terjadi karena sering copy paste. Untuk menghindari duplikasi code buatlah fungsi yang dapat digunaan secara berulang-ulang.

**Refactoring**
Refactoring adalah proses restrukturiassi kode yang dibuat, dengan cara mengubah struktur internal tanpa mengubah perilaku eksternal. Prinsip KISS dan DRY bisa dicapai dengan cara refactor

Teknik Refactoring

- Membuat sebuah abstraksi
- Memecah kode dengan fungsi/class
- Perbaiki penamaan dan lokasi kode
- Deteksi kode yang memiliki duplikasi
