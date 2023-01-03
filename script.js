const btnMobile = document.getElementById('btn-mobile');
const btnCloseMobile = document.getElementById('btn-close');

function toggleMenu() {
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);
btnCloseMobile.addEventListener('click', toggleMenu);

