const txtInt = document.getElementById("validation-input");
const reqLength = parseInt(txtInt.getAttribute("data-length"));

txtInt.addEventListener("blur", (e) => {
  if (txtInt.value.length < reqLength) {
    txtInt.setAttribute("class", "invalid");
  } else {
    txtInt.setAttribute("class", "valid");
  }

  if (txtInt.value === "") {
    txtInt.setAttribute("class", "");
  }
});
