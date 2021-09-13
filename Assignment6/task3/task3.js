let calcBtn = document.getElementById("calc-btn");
let length = document.getElementById("length");
let breadth = document.getElementById("breadth");

calcBtn.style.color = "green";
calcBtn.style.marginTop = "2vh";
calcBtn.style.padding = "0.5rem";

calcBtn.addEventListener("click", calculateArea);

function calculateArea() {
  let area = length.value * breadth.value;
  calcBtn.replaceWith("Ares: " + area);
}
