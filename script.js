const btnMobile = document.getElementById('btn-mobile');
const btnCloseMobile = document.getElementById('btn-close');

function toggleMenu() {
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);
btnCloseMobile.addEventListener('click', toggleMenu);


let sr = ScrollReveal({
  duration: 2500,
  distance: "60px",
});

sr.reveal(".div-main", { delay: 600 });
sr.reveal(".div-logo-img", { origin: "top", delay: 600 });