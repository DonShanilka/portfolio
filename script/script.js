
// Home page js add
const text = document.querySelector('.text p');
text.innerHTML = text.innerText.split("").map(
  (char, i) =>
    `<span style="transform:rotate(${i * 9.6}deg)">${char}</span>`
).join("");


// Scroll Reveal Animation
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
})

sr.reveal('.full-name, .home-page-para', { origin: 'bottom' });


//Animation Line js


