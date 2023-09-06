// Fungsi untuk menghitung luas persegi
function hitungLuasPersegi(sisi) {
  if (sisi <= 0) {
    throw new Error("Sisi harus lebih dari 0");
  }
  return sisi * sisi;
}

// Fungsi untuk menghitung luas lingkaran
function hitungLuasLingkaran(jariJari) {
  if (jariJari <= 0) {
    throw new Error("Jari-jari harus lebih dari 0");
  }
  return Math.PI * jariJari * jariJari;
}

// Fungsi untuk menghitung luas segitiga
function hitungLuasSegitiga(alas, tinggi) {
  if (alas <= 0 || tinggi <= 0) {
    throw new Error("Alas dan tinggi harus lebih dari 0");
  }
  return (alas * tinggi) / 2;
}

try {
  // menghitung luas persegi
  const sisiPersegi = 5;
  const luasPersegi = hitungLuasPersegi(sisiPersegi);
  console.log(`Luas Persegi: ${luasPersegi}`);

  // menghitung luas lingkaran
  const jariJariLingkaran = 3;
  const luasLingkaran = hitungLuasLingkaran(jariJariLingkaran);
  console.log(`Luas Lingkaran: ${luasLingkaran}`);

  // menghitung luas segitiga
  const alasSegitiga = 4;
  const tinggiSegitiga = 6;
  const luasSegitiga = hitungLuasSegitiga(alasSegitiga, tinggiSegitiga);
  console.log(`Luas Segitiga: ${luasSegitiga}`);
} catch (error) {
  console.error(error.message);
}
