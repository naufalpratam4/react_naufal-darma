# React Fundamental

## JSX

JSX merupakan singkatan dari Javascript XML, JSX adalah ekstensi syntax JavaScript yang digunakan dalam pembuatan elemen React. Developer menggunakannya untuk menyematkan (embed) kode HTML pada objek JavaScript.
JSX dibuatkan berdasarkan fakta kalau logika rendering sangat terikat dengan logic UI

**JSX adalah expression**
Setelah dikompilasi, ekspresi JSX akan menjadi panggilan fungsi Javascript biasa dan menjadi objek Javascript

```js
function getGreeting(user) {
    if(user) {
        return <h1>Halo, {formatName(user)}!</h1>
    } return <h1>Halo, Orang Asing </h1>
}
```

## Component

Komponen React adalah bagian kode yang dapat digunakan kembali yang digunakan untuk menentukan tampilan, behavior, dan state sebagian UI

### Function dan class component

```js
function Welcome() {
    return <h1>Hello, Dunia</h1>
}
```

```js
class Welcome extends React.Component {
    render() {
        return <h1>Hello, Dunia</h1>
    }
}
```

## React Lifecycle

![React Lifecycle](https://programmingwithmosh.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-31-at-1.44.28-PM-1024x567.png)

Lifecycle method yang umum

1. render()
2. componentDidMount()
3. componentDidUpdate()
4. componentWillUnmount()

render()

- Fungsi yang paling sering dipakai
- Required pada class component
- Pure function. Tidak boleh ada setState()

componentDidMount()

- Dipanggil ketika component sudah di render untuk pertama kali
- Tempat yang tepat untuk pemanggilan API
- Boleh ada setState()

