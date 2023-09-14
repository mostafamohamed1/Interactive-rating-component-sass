let rates = document.querySelectorAll("ul li");
let submit = document.querySelector(".btn");
let strong = document.querySelector("strong");
let cardDivs = document.querySelectorAll(".card > div");
let star = "";

function removeActiveClass() {
  rates.forEach((item) => {
    item.classList.remove("active");
  });
}

rates.forEach((item) => {
  item.addEventListener("click", () => {
    removeActiveClass();
    if (!item.classList.contains("active")) {
      item.classList.add("active");
      star = item.textContent;
    }
  });
});

submit.addEventListener("click", () => {
  if (!star) return;

  strong.textContent = star;
  cardDivs.forEach((item) => {
    item.classList.add("active");
  });
});
