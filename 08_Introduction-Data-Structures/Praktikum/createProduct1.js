addProduct = () => {
  var productName = document.getElementById("productName").value;
  var productDescription = document.getElementById("productDescription").value;
  var productCategory = document.getElementById("productCategory").value;
  var productImage = document.getElementById("productImage").value;
  var radioProduct1 = document.getElementById("radioProduct1");
  var radioProduct2 = document.getElementById("radioProduct2");
  var radioProduct3 = document.getElementById("radioProduct3");
  var productPrice = document.getElementById("productPrice");

  var table = document.getElementById("productTable");

  var row = table.insertRow(-1);

  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);

  cell1.innerHTML = productName;
  cell2.innerHTML = productCategory;
  cell3.innerHTML = productImage.value;

  if (radioProduct1.checked) {
    cell4.innerHTML = radioProduct1.value;
  } else if (radioProduct2.checked) {
    cell4.innerHTML = radioProduct2.value;
  } else if (radioProduct3.checked) {
    cell4.innerHTML = radioProduct3.value;
  } else {
    cell4.innerHTML = "Tidak Ada yang Dipilih";
  }

  cell5.innerHTML = productDescription;
  cell6.innerHTML = productPrice.value;

  document.getElementById("productName").value = "";
  document.getElementById("productCategory").value = "";
  document.getElementById("productImage").value = "";
  document.getElementById("productRadio1").checked = false;
  document.getElementById("productRadio2").checked = false;
  document.getElementById("productRadio3").checked = false;
  document.getElementById("productDescription").value = "";
  document.getElementById("productPrice").value = "";
};
