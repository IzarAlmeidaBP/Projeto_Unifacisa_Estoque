const login = document.querySelectorAll("[data-butao]");

login.forEach((abrirPagina) => {
  abrirPagina.addEventListener("click", () => {
    window.location.href = "login.html";
  });
});
const voltarLinks = document.querySelectorAll("[data-voltar]");

voltarLinks.forEach((link) => {
  link.addEventListener("click", () => {
    window.location.href = "login.html";
  });
});
