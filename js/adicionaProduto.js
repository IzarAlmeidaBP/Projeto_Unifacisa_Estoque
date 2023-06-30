import React from 'react';

class MeuComponente extends React.Component {
  handleAdicionarProduto = (event) => {
    event.preventDefault();

    const addProduto = document.querySelector('#adiciona-produto');

    const produto = this.addDadosProduto(addProduto);

    const erros = this.validaProduto(produto);
    console.log(erros);
    if (erros.length > 0) {
      this.exibeMensagemErro(erros);
      return;
    }

    const tabela = document.querySelector('#tabela-produtos');

    tabela.appendChild(this.criaProduto(produto));

    addProduto.reset();

    const mensagemErro = document.querySelector('#produto-erro');
    mensagemErro.innerHTML = '';
  };

  addDadosProduto = (addProduto) => {
    const produto = {
      id: addProduto.id.value,
      nome: addProduto.nome.value,
      quantidade: addProduto.quantidade.value,
      preco: addProduto.preco.value,
    };
    return produto;
  };

  criaProduto = (produto) => {
    const produtoTr = document.createElement('tr');
    produtoTr.classList.add('produtos');

    produtoTr.appendChild(this.infoProduto(produto.id, 'info-id'));
    produtoTr.appendChild(this.infoProduto(produto.nome, 'info-nome'));
    produtoTr.appendChild(
      this.infoProduto(produto.quantidade, 'info-quantidade'),
    );
    produtoTr.appendChild(this.infoProduto(produto.preco, 'info-preco'));

    return produtoTr;
  };

  exibeMensagemErro = (erros) => {
    const ulErro = document.querySelector('#produto-erro');
    ulErro.innerHTML = '';
    erros.forEach((erro) => {
      const liErro = document.createElement('li');
      liErro.textContent = erro;
      ulErro.appendChild(liErro);
    });
  };

  infoProduto = (dado, classe) => {
    const info = document.createElement('td');
    info.textContent = dado;
    info.classList.add(classe);
    return info;
  };

  validaProduto = (produto) => {
    const erros = [];
    if (produto.id.length === 0) erros.push('O ID está inválido');
    if (produto.nome.length === 0) erros.push('O nome está inválido');
    if (produto.quantidade.length === 0)
      erros.push('A quantidade está inválida');
    if (produto.preco.length === 0) erros.push('O preço está inválido');
    return erros;
  };

  render() {
    return (
      <div>
        {/* Coloque aqui o conteúdo JSX relacionado ao seu componente */}
      </div>
    );
  }
}

export default MeuComponente;
