var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function (event) {
  var linhaProduto = event.target.parentNode;
  linhaProduto.classList.add("fadeOut");

  setTimeout(function () {
    linhaProduto.remove();
  }, 500);
});
