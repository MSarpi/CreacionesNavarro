const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Mostrar el botón cuando el usuario haya bajado 20% de la altura de la página
window.addEventListener("scroll", () => {
if (window.scrollY > window.innerHeight * 0.2) {
  scrollToTopBtn.style.opacity = "1";
} else {
  scrollToTopBtn.style.opacity = "0";
}
});

// Volver al principio de la página cuando se haga clic en el botón
scrollToTopBtn.addEventListener("click", () => {
window.scrollTo({
  top: 0,
  behavior: "smooth" // Suavizar el scroll para que sea más agradable
});
});

const navbar = document.getElementById("navbar-smoth");

// Mostrar el botón cuando el usuario haya bajado 20% de la altura de la página
window.addEventListener("scroll", () => {
if (window.scrollY > window.innerHeight * 0.9) {
  navbar.style.opacity = "0";
  
} else {
  navbar.style.opacity = "1";
}
});

// Volver al principio de la página cuando se haga clic en el botón
navbar.addEventListener("click", () => {
window.scrollTo({
  top: 0,
  behavior: "smooth" // Suavizar el scroll para que sea más agradable
});
});

function productos_conserjes() {
  $('#conserjes').modal('show');
}

function productos_oficina() {
  $('#oficina').modal('show');
}

function productos_aseo() {
  $('#personal_aseo').modal('show');
}

