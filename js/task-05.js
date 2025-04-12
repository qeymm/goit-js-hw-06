let input = document.getElementById("name-input");
let output = document.getElementById("name-output");

input.addEventListener("input", function () {
  let name = input.value;
  if (name === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = name;
  }
});
