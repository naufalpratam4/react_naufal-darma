# Authentication

Authentication di React adalah cara untuk memastikan bahwa pengguna aplikasi adalah mereka yang mengaku menjadi diri mereka sendiri. Prosesnya umumnya melibatkan langkah-langkah berikut:

1. Login Form:
Pengguna memasukkan informasi seperti email dan kata sandi pada formulir login.
2. Server-Side Verification:
Server memeriksa informasi yang dimasukkan untuk memastikan kebenaran.
Jika benar, server mengirimkan token otentikasi ke React.
3. Token Storage:
React menyimpan token otentikasi ini, biasanya di penyimpanan lokal di browser.
4. Protected Routes:
Beberapa bagian dari aplikasi hanya dapat diakses oleh pengguna yang telah diautentikasi.
Misalnya, hanya pengguna yang login yang dapat melihat halaman profil.
5. Logout:
Pengguna dapat logout, yang menghapus token dan membuatnya tidak bisa mengakses halaman yang dilindungi lagi.
