import React, { useEffect, useState } from "react";
import NavbarPage from "./components/NavbarPage";
import "../src/App.css";
import HeroPage from "./components/Hero";
const App = () => {
  const nama = "naufal";

  const [pacarSaya, setPacarSaya] = useState(0); //kiri -> getter, kanan -> setter
  const [namaPacar, setNamaPacar] = useState("");

  useEffect(() => {
    if (pacarSaya > 0) {
      setNamaPacar("Hana");
    } else {
      setNamaPacar("");
    }
  }, [pacarSaya]);

  return (
    <>
      <NavbarPage />
      <HeroPage nama={nama} />

      {/* hook */}
      <h5>Pacar saya : {namaPacar}</h5>

      <h1>saya memiliki {pacarSaya} pacar</h1>
      <button onClick={() => setPacarSaya((prev) => prev + 1)}>
        {/* untuk menambahkan jumlah angka */}
        Tambah Pacar
      </button>

      {/*kondisi apabila kurang dari 0 maka tidak bisa mengurang angka */}
      {pacarSaya > 0 && (
        <button onClick={() => setPacarSaya((prev) => prev - 1)}>
          {/* untuk mengurangkan jumlah angka */}
          Kurang Pacar
        </button>
      )}

      <button onClick={() => setPacarSaya(0)}>Reset</button>
    </>
  );
};

export default App;
