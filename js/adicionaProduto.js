var botaoAdd = document.querySelector("#adicionar-produto");
botaoAdd.addEventListener("click", function (event) {
  event.preventDefault();

  var addProduto = document.querySelector("#adiciona-produto");

  var produto = addDadosProduto(addProduto);

  var erros = validaProduto(produto);
  console.log(erros);
  if (erros.length > 0) {
    exibeMensagemErro(erros);
    return;
  }

  var tabela = document.querySelector("#tabela-pprodutos");

  tabela.appendChild(criaProduto(produto));

  addProduto.reset();

  var mensagemErro = document.querySelector("#produto-erro");
  mensagemErro.innerHTML = "";
});

function addDadosProduto(addProduto) {
  var produto = {
    id: addProduto.id.value,
    nome: addProduto.nome.value,
    quantidade: addProduto.quantidade.value,
    preco: addProduto.preco.value,
  };
  return produto;
}

function criaProduto(produto) {
  var produtoTr = document.createElement("tr");
  produtoTr.classList.add("produtos");

  produtoTr.appendChild(infoProduto(produto.id, "info-id"));
  produtoTr.appendChild(infoProduto(produto.nome, "info-nome"));
  produtoTr.appendChild(infoProduto(produto.quantidade, "info-quantidade"));
  produtoTr.appendChild(infoProduto(produto.preco, "info-preco"));

  return produtoTr;
}

function exibeMensagemErro(erros) {
  var ulErro = document.querySelector("#produto-erro");
  ulErro.innerHTML = "";
  erros.forEach(function (erro) {
    var liErro = document.createElement("li");
    liErro.textContent = erro;
    ulErro.appendChild(liErro);
  });
}

function infoProduto(dado, classe) {
  var info = document.createElement("td");
  info.textContent = dado;
  info.classList.add(classe);
  return info;
}

function validaProduto(produto) {
  var erros = [];
  if (produto.id.length == 0) erros.push("O ID está inválido");
  if (produto.nome.length == 0) erros.push("O nome está inválido");
  if (produto.quantidade.length == 0) erros.push("A quantidade está inválida");
  if (produto.preco.length == 0) erros.push("O preço está inválido");
  return erros;
}
