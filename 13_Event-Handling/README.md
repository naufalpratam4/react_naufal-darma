# Event Handling

## State

state adalah data private sebuah component. Data ini hanya tersedia untuk component tersebut dan tidak bisa diakses dari component lain

## Stateful

**perbedaan stateless dan stateful**
stateful componen adalah memiliki state. Component ini dibuat engan class.

stateless component

- Tidak tahu tentang aplikasi
- Tidak melakukan data fetching (pengambilan data)
- Tujuan utamanya adalah visualisasi
- Dapat digunakan kembali
- Hanya berkomunikasi dengan induk langsungnya

stateful component

- mengerti tentang aplikasi
- melakukan data fetching (pengambilan data)
- berinteraksi dengan aplikasi
- tidak dapat digunakan kembali
- meneruskan status dan data ke child
