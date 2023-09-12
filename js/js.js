document.getElementById("toastbtn").onclick = function() {
  var toastElList = [].slice.call(document.querySelectorAll('.toast'))
  var toastList = toastElList.map(function(toastEl) {
  // Creates an array of toasts (it only initializes them)
    return new bootstrap.Toast(toastEl) // No need for options; use the default options
  });
 toastList.forEach(toast => toast.show()); // This show them

  console.log(toastList); // Testing to see if it works

};



var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos < 90) {
      document.getElementById("navbar-smoth").style.top = "0";
  } else {
      document.getElementById("navbar-smoth").style.top = "-300px";
  }
  prevScrollpos = currentScrollPos;
}

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


function productos_conserjes() {
  $('#conserjes').modal('show');
}

function productos_oficina() {
  $('#oficina').modal('show');
}

function productos_aseo() {
  $('#personal_aseo').modal('show');
}

