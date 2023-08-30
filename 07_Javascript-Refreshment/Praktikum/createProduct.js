const textInput = document.getElementById("textInput");
const categoryProduct = document.getElementById("categoryProduct");
const productImage = document.getElementById("productImage");
const productPrice = document.getElementById("productPrice");
const aDescription = document.getElementById("aDescription");
const radioProduct = document.querySelectorAll("[name='flexRadioDefault']");
const validationRadio = document.getElementById("validationRadio");
const submitButton = document.getElementById("submitButton");

function validateText() {
  let isValid = true;

  // Clear previous validation messages and borders
  clearValidation();

  // Validate Product Name
  if (textInput.value.trim() === "") {
    showErrorAndHighlight(
      textInput,
      "validationFormProduct",
      "Please enter a valid Product name."
    );
    isValid = false;
  } else if (/[@#{}]/.test(textInput.value)) {
    showErrorAndHighlight(
      textInput,
      "validationFormProduct",
      "Name must not contain symbols."
    );
    isValid = false;
  }
  //   else if (productName.length > 25) {
  //     showErrorAndHighlight(textInput, "validationFormProduct", "Product Name must not exceed 25 characters.");
  //     isValid = false;
  //   } else if (productName.length > 10) {
  //     alert("Product Name must not exceed 10 characters.");
  //   gatau masih errorrr

  // Validate Product Category
  if (categoryProduct.value === "") {
    showErrorAndHighlight(
      categoryProduct,
      "validationCategory",
      "Please select a product category."
    );
    isValid = false;
  }

  // Validate Product Image
  if (productImage.value === "") {
    showErrorAndHighlight(
      productImage,
      "validationImage",
      "Please choose an image for the product."
    );
    isValid = false;
  }

  //   product freshness

  // Validate Additional Description
  if (aDescription.value.trim() === "") {
    showErrorAndHighlight(
      aDescription,
      "validationMessage",
      "Please fill in the additional description."
    );
    isValid = false;
  }

  // Validate Product Price
  if (productPrice.value.trim() === "") {
    showErrorAndHighlight(
      productPrice,
      "validationMessage",
      "Please enter the product price."
    );
    isValid = false;
  }

  submitButton.disabled = !isValid;
}

function showErrorAndHighlight(
  inputElement,
  validationElementId,
  errorMessage
) {
  const validationElement = document.getElementById(validationElementId);
  validationElement.textContent = errorMessage;
  validationElement.style.color = "red";
  inputElement.classList.add("error-border");
}

function clearValidation() {
  const validationElements = document.querySelectorAll(".validation-message");
  validationElements.forEach((element) => {
    element.textContent = "";
  });

  const errorInputs = document.querySelectorAll(".error-border");
  errorInputs.forEach((input) => {
    input.classList.remove("error-border");
  });
}

function handleSubmit(event) {
  event.preventDefault();

  if (!submitButton.disabled) {
    let selectedRadioValue = "";
    radioProduct.forEach((radio) => {
      if (radio.checked) {
        selectedRadioValue = radio.value;
      }
    });
    alert(
      `Product Name: ${textInput.value}\n` +
        `Product Category: ${categoryProduct.value}\n` +
        `Product Freshness: ${selectedRadioValue}\n` +
        `Product Price: $${productPrice.value}\n` +
        `Additional Description: ${aDescription.value}`
    );
  }
}

submitButton.addEventListener("click", handleSubmit);
textInput.addEventListener("input", validateText);
categoryProduct.addEventListener("change", validateText);
productImage.addEventListener("change", validateText);
productPrice.addEventListener("input", validateText);
aDescription.addEventListener("input", validateText);

radioProduct.forEach((radio) => {
  radio.addEventListener("change", validateRadio);
});
