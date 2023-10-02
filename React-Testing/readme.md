# Testing

Testing adalah proses memverifikasi bahwa test assertions kita benar dan bahwa code kita tetap benar sepanjang masa aplikasi. Test assertion ini adalah ekspresi boolean yang mengembalikan nilai true kecuali ada bug di kode kita

Pengujian ini dapat dilakukan menggunakan berbagai alat dan pustaka, dengan Jest dan React Testing Library sebagai salah satu pilihan yang populer.

1. Jest:

Deskripsi: Jest adalah kerangka pengujian JavaScript yang kuat dan sangat populer, dikembangkan oleh Facebook.
Fitur:
Dukungan untuk pengujian unit dan pengujian fungsional.
Snapshot testing untuk memastikan perubahan tidak merusak tampilan.
Mendukung async testing dan mocking.
2. React Testing Library:

Deskripsi: React Testing Library adalah pustaka yang dirancang untuk membantu pengujian pada komponen React dengan fokus pada pengujian fungsional dan integrasi.
Fitur:
Memberikan utilitas untuk mencari elemen berdasarkan label teks, role, atau data-testid, sehingga pengujian lebih mirip dengan cara pengguna berinteraksi dengan aplikasi.
Mendorong pengujian yang lebih berfokus pada perilaku pengguna dan menghindari terlalu banyak ketergantungan pada struktur internal komponen.
3. Jenis Pengujian React:

Pengujian Unit: Menguji fungsi dan metode individual pada komponen React.
Pengujian Integrasi: Menguji bagaimana beberapa komponen bekerja bersama-sama sebagai satu kesatuan.
Pengujian Fungsional: Menguji perilaku dari perspektif pengguna, seringkali melibatkan simulasi interaksi pengguna.
4. Jest dan Babel:

Jest bekerja dengan Babel untuk mengonversi sintaks modern JavaScript dan JSX menjadi format yang dapat dijalankan di lingkungan Node.js atau browser.
5. Menjalankan Pengujian:

Jalankan pengujian dengan perintah npm test.
Konfigurasi Jest dapat dilakukan melalui file jest.config.js atau bagian jest dalam package.json.
6. Strategi Pengujian:

Pengujian Snapshot: Mengambil "snapshot" dari output komponen dan memastikan snapshot tetap konsisten.
Pengujian Async: Menangani pengujian untuk operasi asinkron dengan async/await atau Promise.
Pengujian Mocking: Menggantikan fungsi atau modul dengan implementasi palsu untuk mengisolasi komponen atau modul tertentu.
7. Tantangan:

Memahami Fungsi Komponen: Fokus pada perilaku komponen daripada implementasi internalnya.
Maintainability: Menjaga pengujian agar tetap relevan seiring waktu dan perubahan kode.
Kontinuitas Integrasi: Integrasi pengujian dalam alur kerja CI/CD untuk memastikan kestabilan aplikasi.
