const slider = document.querySelector("#slider");
const sliderimg = document.querySelectorAll(".slider-img");
const slidertext = document.querySelectorAll(".slider__content-text");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length - 1];

let contador = 0;
const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement("afterbegin", sliderSectionLast);
if (contador == 0) {
  sliderimg[0].classList.add("slider-img2");
  slidertext[0].classList.add("slider-text2");
}
function Next() {
  let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
  slider.style.marginLeft = "-200%";
  slider.style.transition = "all 0s ease-in-out";
  setTimeout(function () {
    slider.style.transition = "none";
    slider.insertAdjacentElement("beforeend", sliderSectionFirst);
    slider.style.marginLeft = "-100%";
  }, 500);
  contador++;
  if (contador == 3) {
    contador = 0;
  }
  if (contador == 1) {
    sliderimg[1].classList.add("slider-img2");
    slidertext[1].classList.add("slider-text2");
    sliderimg[0].classList.remove("slider-img2");
    slidertext[0].classList.remove("slider-text2");
  } else if (contador == 2) {
    sliderimg[2].classList.add("slider-img2");
    slidertext[2].classList.add("slider-text2");
  } else if (contador == 0) {
    sliderimg[0].classList.add("slider-img2");
    slidertext[0].classList.add("slider-text2");
    sliderimg[1].classList.remove("slider-img2");
    slidertext[1].classList.remove("slider-text2");
    sliderimg[2].classList.remove("slider-img2");
    slidertext[2].classList.remove("slider-text2");
  }
}

function Prev() {
  let sliderSection = document.querySelectorAll(".slider__section");
  let sliderSectionLast = sliderSection[sliderSection.length - 1];
  slider.style.marginLeft = "0";
  slider.style.transition = "all 0s ease-in-out";
  setTimeout(function () {
    slider.style.transition = "none";
    slider.insertAdjacentElement("afterbegin", sliderSectionLast);
    slider.style.marginLeft = "-100%";
  }, 500);
  contador--;
  if (contador == -3) {
    contador = 0;
  }
  if (contador == -1) {
    sliderimg[2].classList.add("slider-img2");
    slidertext[2].classList.add("slider-text2");
    sliderimg[0].classList.remove("slider-img2");
    slidertext[0].classList.remove("slider-text2");
  } else if (contador == -2) {
    sliderimg[1].classList.add("slider-img2");
    slidertext[1].classList.add("slider-text2");
  } else if (contador == 0) {
    sliderimg[0].classList.add("slider-img2");
    slidertext[0].classList.add("slider-text2");
    sliderimg[1].classList.remove("slider-img2");
    slidertext[1].classList.remove("slider-text2");
    sliderimg[2].classList.remove("slider-img2");
    slidertext[2].classList.remove("slider-text2");
  }
}
btnRight.addEventListener("click", function () {
  Next();
});
btnLeft.addEventListener("click", function () {
  Prev();
});
setInterval(function () {
  Next();
}, 50000);
