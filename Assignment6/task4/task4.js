const radioBtns = document.querySelectorAll('input[type="radio"]');
console.log(radioBtns);

radioBtns.forEach(function (rbtn) {
  rbtn.addEventListener("click", checkRbtn);
});

function checkRbtn() {
  radioBtns.forEach(function (rbtn) {
    if (!rbtn.checked) {
      rbtn.style.display = "none";
    }
  });
}
