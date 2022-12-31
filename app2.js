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

const search = document.querySelector(".pSearch");
const ul = document.querySelector("ul");
const dropDown = document.querySelector(".imgMp");

search.addEventListener("click", function () {
  ul.classList.toggle("show");
  dropDown.classList.toggle("toggle");
});

const category = document.querySelectorAll(".category");
const cateIcon = document.querySelectorAll(".cateIcon");
const cateDD = document.querySelectorAll(".cateDropDown");

const categoryArray = Array.from(category);

for (const categories of categoryArray) {
  categories.addEventListener("click", function () {
    if (categoryArray.indexOf(categories) === 0) {
      cateDD[0].classList.toggle("show");
      cateIcon[0].classList.toggle("toggle");
    } else if (categoryArray.indexOf(categories) === 1) {
      cateDD[1].classList.toggle("show");
      cateIcon[1].classList.toggle("toggle");
    } else if (categoryArray.indexOf(categories) === 2) {
      cateDD[2].classList.toggle("show");
      cateIcon[2].classList.toggle("toggle");
    } else {
      cateDD[3].classList.toggle("show");
      cateIcon[3].classList.toggle("toggle");
    }
  });
}
