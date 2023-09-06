// Deklarasi variable
const form = document.getElementById("form");
const productInput = document.getElementById("productInput");
const productCategory = document.getElementById("productCategory");
const productImage = document.getElementById("productImage");
const radioProduct1 = document.getElementById("radioProduct1");
const radioProduct2 = document.getElementById("radioProduct2");
const radioProduct3 = document.getElementById("radioProduct3");
const productDescription = document.getElementById("productDescription");
const productPrice = document.getElementById("productPrice");

// validation
const validationProduct = document.getElementById("validationProduct");
const validationCategory = document.getElementById("validationCategory");
const validationImage = document.getElementById("validationImage");
const validationRadio = document.getElementById("validationRadio");
const validationDescription = document.getElementById("validationDescription");
const validationPrice = document.getElementById("validationPrice");
const submit = document.getElementById("submit");

// function submit
form.addEventListener("submit", function (e) {
  e.preventDefault();

  // untuk cek apakah tidak inputan yang terisi
  if (
    productInput.value.length < 1 &&
    productCategory.value.length < 1 &&
    productImage.value.length < 1 &&
    !radioProduct1.checked &&
    !radioProduct2.checked &&
    !radioProduct3.checked &&
    productDescription.value.length < 1 &&
    productPrice.value.length < 1
  ) {
    alert("The xxx field must be filled in");
  }
  if (productInput.value.length < 1) {
    // untuk cek apakah productName telah diinput atau belum dan apakah mengandung simbol/lebih dari 10 karakter
    validationProduct.textContent = "Tidak boleh kosong";
    validationProduct.style.color = "red";
    productInput.style.borderColor = "red";
  } else if (productInput.value === "@") {
    validationProduct.textContent = "Tidak boleh menggunakan symbol";
    validationProduct.style.color = "red";
    productInput.style.borderColor = "red";
  } else if (productInput.value.length > 10) {
    validationProduct.textContent = "Tidak boleh lebih dari 25 karakter";
    validationProduct.style.color = "red";
    productInput.style.borderColor = "red";
  } else {
    validationProduct.textContent = "";
    validationProduct.style.color = "";
    productInput.style.borderColor = "";
  }

  // untuk cek apakah productCategory telah diinput atau belum
  if (productCategory.value.length < 1) {
    validationCategory.textContent = "Tidak boleh kosong";
    validationCategory.style.color = "red";
    productCategory.style.borderColor = "red";
  } else {
    validationCategory.textContent = "";
    validationCategory.style.color = "";
    productCategory.style.borderColor = "";
  }

  // untuk cek apakah productImage telah diinput atau belum
  if (productImage.value.length < 1) {
    validationImage.textContent = "Tidak boleh kosong";
    validationImage.style.color = "red";
  } else {
    validationImage.textContent = "";
    validationImage.style.color = "";
  }

  // untuk cek apakah productFreshness telah diinput atau belum
  if (
    !radioProduct1.checked &&
    !radioProduct2.checked &&
    !radioProduct3.checked
  ) {
    validationRadio.textContent = "Please select a product freshness.";
    validationRadio.style.color = "red";
    radioProduct1.style.borderColor = "red";
    radioProduct2.style.borderColor = "red";
    radioProduct3.style.borderColor = "red";
  } else {
    validationRadio.textContent = "";

    radioProduct1.style.borderColor = "";
    radioProduct2.style.borderColor = "";
    radioProduct3.style.borderColor = "";
  }

  // untuk cek apakah productDescription telah diinput atau belum
  if (productDescription.value.length < 1) {
    validationDescription.textContent = "Please select a product freshness.";
    validationDescription.style.color = "red";
    productDescription.style.borderColor = "red";
  } else {
    validationDescription.textContent = "";
    validationDescription.style.color = "";
    productDescription.style.borderColor = "";
  }

  // untuk cek apakah productPrice telah diinput atau belum
  if (productPrice.value.length < 1) {
    validationPrice.textContent = "Please input a price";
    validationPrice.style.color = "red";
    productPrice.style.borderColor = "red";
  } else {
    validationPrice.textContent = "";
    validationPrice.style.color = "";
    productPrice.style.borderColor = "";
  }

  // untuk cek apakah semua inputan telah diinput atau belum
  if (
    (productInput.value.length > 1 &&
      productCategory.value.length > 1 &&
      productImage.value.length > 1 &&
      !radioProduct1.checked) ||
    !radioProduct2.checked ||
    !radioProduct3.checked ||
    (productDescription.value.length > 1 && productPrice.value.length > 1)
  ) {
    // submit
    let inputValues = "";

    inputValues += "Product Name: " + productInput.value + "\n";
    inputValues += "Product Category: " + productCategory.value + "\n";
    inputValues += "Product Image: " + productImage.value + "\n";

    // untuk mengecek radio button
    if (radioProduct1.checked) {
      inputValues += "Product Freshness: Fresh\n";
    } else if (radioProduct2.checked) {
      inputValues += "Product Freshness: Semi-fresh\n";
    } else if (radioProduct3.checked) {
      inputValues += "Product Freshness: Not Fresh\n";
    }
    inputValues += "Product Description: " + productDescription.value + "\n";
    inputValues += "Product Price: " + productPrice.value + "\n";

    // Menampilkan semua inputan dalam kotak dialog alert
    alert(inputValues);
  }
});
