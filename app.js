//peloader code start

const loader = document.querySelector(".circle");
const right = document.querySelector(".section-right");
const left = document.querySelector(".section-left");
const covers = document.querySelector("#loader-wrapper");
const fade = function () {
  loader.classList.add("loader");
  right.classList.add("loader");
  left.classList.add("loader");
  covers.classList.add("loader");
};

window.addEventListener("load", () => setTimeout(fade, 3000));
//peloader code end

//navbar bar code start
//navbar bar code end

//slider start
const first = document.querySelector(".fourth");
const second = document.querySelector(".third");
const third = document.querySelector(".second");
const fourth = document.querySelector(".first");

window.addEventListener("load", () =>
  setTimeout(function () {
    first.classList.add("shows");
  }, 0)
);
window.addEventListener("load", () =>
  setTimeout(function () {
    second.classList.add("shows");
  }, 0)
);
window.addEventListener("load", () =>
  setTimeout(function () {
    third.classList.add("shows");
  }, 0)
);
window.addEventListener("load", () =>
  setTimeout(function () {
    fourth.classList.add("shows");
  }, 0)
);
//slider end

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "flex";
  slides[slideIndex - 1].style.justifyContent = "center";

  setTimeout(showSlides, 6000); // Change image every 6 seconds
}

let slideIndex2 = 1;
showSlidesTwo(slideIndex2);

function plusSlides(n) {
  showSlidesTwo((slideIndex2 += n));
}

function currentSlide(n) {
  showSlidesTwo((slideIndex2 = n));
}

function showSlidesTwo(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {
    slideIndex2 = 1;
  }
  if (n < 1) {
    slideIndex2 = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex2 - 1].style.display = "flex";
  slides[slideIndex2 - 1].style.justifyContent = "center";
}

//some hiver effect

const ink = document.querySelector(".ink");
const Ps = document.querySelectorAll(".p");

for (const pick of Ps) {
  pick.addEventListener("mouseover", function () {
    if (pick === Ps[0]) {
      ink.style.top = "0%";
    } else if (pick === Ps[1]) {
      ink.style.top = "25%";
    } else if (pick === Ps[2]) {
      ink.style.top = "50%";
    } else if (pick === Ps[3]) {
      ink.style.top = "75%";
    } else {
      console.log(" ");
    }
  });
}

//top creator slides

let slideIndexThird = 0;
showSlidesThird();

function showSlidesThird() {
  let i;
  let slides = document.getElementsByClassName("inss");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndexThird++;
  if (slideIndexThird > slides.length) {
    slideIndexThird = 1;
  }

  slides[slideIndexThird - 1].style.display = "block";

  setTimeout(showSlidesThird, 4000); // Change image every 4 seconds
}

const email = document.querySelector(".email");
const PH = document.querySelector(".placeholder");
const submit = document.querySelector(".submit");
email.addEventListener("click", function () {
  PH.classList.add("active");
});

submit.addEventListener("click", function () {
  PH.classList.remove("active");
});

const marketPlace = document.querySelectorAll(".mp");
const home = document.querySelectorAll(".homes");
const homeMain = document.querySelector(".homeMain");
const mpMain = document.querySelector(".marketPMain");
const auction = document.querySelectorAll(".auction");
const drops = document.querySelectorAll(".drop");
