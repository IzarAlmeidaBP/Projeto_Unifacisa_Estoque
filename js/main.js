const login = document.querySelectorAll("[data-butao]");

login.forEach((abrirPagina) => {
  abrirPagina.addEventListener("click", () => {
    window.location.href = "login.html";
  });
});
