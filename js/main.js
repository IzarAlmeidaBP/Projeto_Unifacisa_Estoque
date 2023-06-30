const login = document.querySelectorAll('[data-butao]');
var botaoEntrar = document.querySelector('#botao-entrar');

login.forEach((abrirPagina) => {
  abrirPagina.addEventListener('click', () => {
    window.location.href = 'login.html';
  });
});

const voltarLinks = document.querySelectorAll('[data-voltar]');

document.addEventListener('DOMContentLoaded', function () {
  var setaVoltar = document.querySelector('.seta-voltar');

  setaVoltar.addEventListener('click', function (event) {
    event.preventDefault();
    window.history.back();
  });
});

document.addEventListener('DOMContentLoaded', function () {
  botaoEntrar.addEventListener('click', function (event) {
    event.preventDefault();
    realizarLogin();
  });
});

function realizarLogin() {
  var usuarioInput = document.querySelector('#usuario');
  var senhaInput = document.querySelector('#senha');

  var usuario = usuarioInput.value;
  var senha = senhaInput.value;

  if (validarLogin(usuario, senha)) {
    window.location.href = 'controle.html';
  } else {
    alert('Usuário ou senha inválidos');
  }
}

function validarLogin(usuario, senha) {
  return usuario === 'hugo' && senha === '123456';
}
