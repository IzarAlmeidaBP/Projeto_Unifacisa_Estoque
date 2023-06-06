/* var formulario = document.querySelector("#adiciona-produto");
var tabelaProdutos = document.querySelector("#tabela-pprodutos");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  var idInput = formulario.querySelector("#id");
  var nomeInput = formulario.querySelector("#nome");
  var quantidadeInput = formulario.querySelector("#quantidade");
  var precoInput = formulario.querySelector("#preco");

  var id = idInput.value;
  var nome = nomeInput.value;
  var quantidade = quantidadeInput.value;
  var preco = precoInput.value;

  if (verificarIdDuplicado(id)) {
    alert("O ID do produto já está em uso. Insira um ID único.");
    return;
  }

  if (verificarNomeDuplicado(nome)) {
    alert("O nome do produto já está em uso. Insira um nome único.");
    return;
  }

  if (!validarQuantidade(quantidade)) {
    alert("A quantidade do produto deve ser um número.");
    return;
  }

  if (!validarPreco(preco)) {
    alert("O preço do produto deve ser um número válido. Exemplo: 10.00");
    return;
  }

  adicionarProduto(id, nome, quantidade, preco);

  formulario.reset();
});

function verificarIdDuplicado(id) {
  var idsProdutos = tabelaProdutos.querySelectorAll(".info-id");

  for (var i = 0; i < idsProdutos.length; i++) {
    if (idsProdutos[i].textContent === id) {
      return true;
    }
  }

  return false;
}

function verificarNomeDuplicado(nome) {
  var nomesProdutos = tabelaProdutos.querySelectorAll(".info-nome");

  for (var i = 0; i < nomesProdutos.length; i++) {
    if (nomesProdutos[i].textContent === nome) {
      return true;
    }
  }

  return false;
}

function validarQuantidade(quantidade) {
  return !isNaN(parseFloat(quantidade)) && isFinite(quantidade);
}

function validarPreco(preco) {
  var precoNumerico = parseFloat(preco.replace("R$ ", "").replace(",", "."));
  return !isNaN(precoNumerico) && isFinite(precoNumerico);
}

function adicionarProduto(id, nome, quantidade, preco) {
  var novaLinha = document.createElement("tr");
  novaLinha.classList.add("produtos");

  novaLinha.innerHTML = `
    <td class="info-id">${id}</td>
    <td class="info-nome">${nome}</td>
    <td class="info-quantidade">${quantidade}</td>
    <td class="info-preco">R$ ${preco}</td>
  `;

  tabelaProdutos.appendChild(novaLinha);
}
 */