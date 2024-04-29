
// Home page js add
const text = document.querySelector('.text p');
text.innerHTML = text.innerText.split("").map(
  (char, i) =>
    `<span style="transform:rotate(${i * 9.6}deg)">${char}</span>`
).join("");


// project page scrool js
let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

nextBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft += 1400;
});

backBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft += -1390;
});