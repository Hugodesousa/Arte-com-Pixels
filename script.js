// Declara botoes da palheta de cores como const.
const button1 = document.getElementById('color1');
const button2 = document.getElementById('color2');
const button3 = document.getElementById('color3');
const button4 = document.getElementById('color4');
const clear = document.getElementById('clear-board');
const palheta = document.getElementById('color-palette');
// Determina cores da palheta.
button1.style.backgroundColor = 'rgb(0, 0, 0)';
button2.style.backgroundColor = 'rgb(158, 1, 20)';
button3.style.backgroundColor = 'rgb(236, 204, 18)';
button4.style.backgroundColor = 'rgb(13, 177, 48)';
// Adiciona clase selected a primeira cor
button1.classList.add('selected');
// remove  a classe selected e adiciona a mesma na cor selecionada.
function selectColor(Event) {
  const cor = document.querySelector('.selected');
  cor.classList.remove('selected');
  Event.target.classList.add('selected');
}

button1.addEventListener('click', selectColor);
button2.addEventListener('click', selectColor);
button3.addEventListener('click', selectColor);
button4.addEventListener('click', selectColor);

// Cria 25 divs para represeratam os pixel a serem coloridos ( adiciona uma classa para todas as divs e um id para cada pixel).

const board = document.getElementById('pixel-board');

function creatPixel() {
  for (let index = 0; index < 25; index += 1) {
    const pixel = document.createElement('div');
    board.appendChild(pixel);
    pixel.classList.add('pixel');
    pixel.id = `px${index}`;
  }
}
// eslint-disable-next-line sonarjs/no-use-of-empty-return-value
window.onload = creatPixel();

// Adiciona cor ao pixel clicado.
//


const px0 = document.querySelectorAll('.pixel');
for (let i = 0; i < px0.length; i += 1) {
  px0[i].addEventListener('click', () => {
    const teste = document.querySelector('.selected');
    px0[i].style.backgroundColor = teste.style.backgroundColor;
  });
}

// Funçaão para limpar board.
function limpar() {
  for (let i = 0; i < px0.length; i += 1) {
    px0[i].style.backgroundColor = 'rgb(255, 255, 255)';
  }
}
clear.addEventListener('click', limpar);

