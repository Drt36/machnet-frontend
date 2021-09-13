//runs at first
var carouselIndex = -1;
showCarousel(carouselIndex);

//run after click arrow
function plusCarousel(n) {
  showCarousel((carouselIndex += n));
}

//run after click circle
function currentCarousel(n) {
  showCarousel((carouselIndex = n));
}

//main logic
function showCarousel(n) {
  var i;
  var carousel = document.getElementsByClassName("carousel__img");
  var circle = document.getElementsByClassName("circle");

  if (n > carousel.length) {
    carouselIndex = 1;
  }

  if (n < 1) {
    carouselIndex = carousel.length;
  }

  for (i = 0; i < carousel.length; i++) {
    carousel[i].style.display = "none";
  }

  for (i = 0; i < circle.length; i++) {
    circle[i].className = circle[i].className.replace(" active", "");
  }
  carousel[carouselIndex - 1].style.display = "block";
  circle[carouselIndex - 1].className += " active";
}
