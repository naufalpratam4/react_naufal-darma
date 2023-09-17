import React from "react";

class TableData extends React.Component {
  constructor() {
    super();
    randomValue: null,
      (this.state = {
        nama: "",
      });
  }
  kirimPesan(nama) {
    // console.log("Kirim Pesan Kepada " + nama);
    alert("Kirim pesan kepada " + nama);
  }

  ubahTulisan(e) {
    e.target.innerHTML = "Kirim Pesan";
  }
  ubahLagi(e) {
    e.target.innerHTML = "Click Me";
  }

  sapa(e) {
    this.setState({ nama: e.target.value });
  }

  randomMath = () => {
    const angkaRandom = Math.floor(Math.random() * 100) + 1;
    this.setState({ angkaRandom });
    alert(`Angka Random : ${angkaRandom}`);
  };

  render() {
    return (
      <>
        {/* <button onClick={() => alert("coba")}>klik meeee</button> */}
        {/* <button onClick={this.kirimPesan.bind(this, "Naufal")}>
          Kirim Pesan
        </button>
        <button onClick={(e) => this.kirimPesan("Darma", e)}>
          Kirim Pesan
        </button> */}
        <button
          onClick={(e) => this.kirimPesan("Darma", e)}
          onMouseEnter={(e) => this.ubahTulisan(e)}
          onMouseOut={(e) => this.ubahLagi(e)}
        >
          Click Me
        </button>

        {/* onchange */}
        <h1>Hallo : {this.state.nama}</h1>
        <input type="text" onChange={this.sapa.bind(this)} />

        <h1>Angka Random</h1>
        <button
          onMouseEnter={(e) => this.ubahTulisan(e)}
          onMouseOut={(e) => this.ubahLagi(e)}
          onClick={this.randomMath}
        >
          Random
        </button>
      </>
    );
  }
}
export default TableData;
