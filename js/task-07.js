let font = document.getElementById("font-size-control");
let text = document.getElementById("text");
let min = document;

font.addEventListener("input", (e) => {
  text.style.fontSize = font.value + "px";
});
