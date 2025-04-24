
const botaoFujao = document.getElementById('botao10mil');

function moverBotao() {
  const largura = window.innerWidth - botaoFujao.offsetWidth;
  const altura = window.innerHeight - botaoFujao.offsetHeight;

  const x = Math.random() * largura;
  const y = Math.random() * altura;

  botaoFujao.style.left = `${x}px`;
  botaoFujao.style.top = `${y}px`;
}

botaoFujao.addEventListener('mouseenter', moverBotao);
botaoFujao.addEventListener('touchstart', moverBotao);
