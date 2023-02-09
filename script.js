let countDisplay = document.querySelector(".count");
let decBtnClick = document.querySelector(".decrease");
let incBtnClick = document.querySelector(".increase");
let resBtnClick = document.querySelector(".reset");

let counter = 0;

decBtnClick.addEventListener("click", function () {
  counter--;
  document.querySelector(".count").textContent = counter;
});

resBtnClick.addEventListener("click", function () {
    counter=0;
    document.querySelector(".count").textContent = counter;
  });

  incBtnClick.addEventListener("click", function () {
    counter++;
    document.querySelector(".count").textContent = counter;
  });
  