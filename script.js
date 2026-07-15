const BASE_URL = 'https://pay.kiwify.com.br/';
const links = {
  '8RPoicE': 'https://pay.kiwify.com.br/8RPoicE',
  '0oY9To4': 'https://pay.kiwify.com.br/0oY9To4',
  'K9rM9rC': 'https://pay.kiwify.com.br/K9rM9rC',
  'kfJ8dFf': 'https://pay.kiwify.com.br/kfJ8dFf',
};

function redireciona(slug) {
  const url = links[slug] || `${BASE_URL}${slug}`;
  window.open(url, '_self');
}

function redirecionaFinal() {
  redireciona('0oY9To4');
}

function atualizarEstoque() {
  const estoqueInicial = 48;
  let estoqueAtual = estoqueInicial;
  const elementos = [
    document.getElementById('estoque-limitado'),
    document.getElementById('estoque-final')
  ];

  const tick = () => {
    estoqueAtual = Math.max(estoqueAtual - 1, 12);
    const texto = `${estoqueAtual} vagas restantes`;
    elementos.forEach((el) => {
      if (el) el.textContent = texto;
    });
  };

  tick();
  setInterval(tick, 5000);
}

function inicializarCarrossel() {
  const slides = Array.from(document.querySelectorAll('.slide'));
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');
  let index = 0;

  if (!slides.length) return;

  function mostrar(indice) {
    slides.forEach((slide, i) => slide.classList.toggle('active', i === indice));
  }

  function avancar() {
    index = (index + 1) % slides.length;
    mostrar(index);
  }

  function voltar() {
    index = (index - 1 + slides.length) % slides.length;
    mostrar(index);
  }

  prev?.addEventListener('click', voltar);
  next?.addEventListener('click', avancar);
  setInterval(avancar, 5000);
  mostrar(index);
}

window.addEventListener('DOMContentLoaded', () => {
  atualizarEstoque();
  inicializarCarrossel();
});
