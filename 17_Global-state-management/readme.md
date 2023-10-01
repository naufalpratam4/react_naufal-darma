# Redux

## Store

- Store adalah objek pusat dalam Redux yang menyimpan seluruh state aplikasi. Ini adalah tempat sentral untuk menyimpan data aplikasi.
- Store mengikat bersama state aplikasi, actions, dan reducers. Ini bertindak sebagai wadah yang menyimpan semua informasi aplikasi dalam satu tempat.

## Reducer

- Reducer adalah fungsi murni dalam Redux yang bertanggung jawab untuk mengelola perubahan state dalam aplikasi.
- Reducer menerima dua argumen: state saat ini dan action yang menggambarkan apa yang harus dilakukan reducer.

## Dispatch

proses pemanggilan sebuah instruksi yang disediakan oleh reducer

## Subscription

Subscription adalah mekanisme dalam Redux yang memungkinkan komponen React untuk berlangganan (subscribe) ke perubahan state di store. Dengan kata lain, komponen dapat mendaftarkan diri mereka untuk menerima pembaruan secara otomatis ketika data di store berubah.