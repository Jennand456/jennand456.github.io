let slide1 = document.getElementById("slide1")
let slide2 = document.getElementById("slide2");
let slide3 = document.getElementById("slide3");
let slide4 = document.getElementById("slide4");

let slides = [slide1, slide2, slide3, slide4];

let currentSlideIndex = 0;

function showCurrentSlide() {
  for (let i = 0; i < slides.length; i++) {
    let loopSlide = slides[i];
    if (i != currentSlideIndex) {
      loopSlide.style.display = "none";
    } else {
      loopSlide.style.display = "inline-block";
    }
  }
}

showCurrentSlide();

function showNextSlide() {
  currentSlideIndex++;
  showNextSlide();
}

function showPreviousSlide() {
  currentSlideIndex--;
  showCurrentSlide();
}
