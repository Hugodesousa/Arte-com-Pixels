// Declara botoes da palheta de cores como const.
const button1 = document.getElementById('color1');
const button2 = document.getElementById('color2');
const button3 = document.getElementById('color3');
const button4 = document.getElementById('color4');
const clear = document.getElementById('clear-board');
// Determina cores da palheta.
const r = Math.floor(Math.random() * 255); const g = Math.floor(Math.random() * 255);
const b = Math.floor(Math.random() * 255);

const r2 = Math.floor(Math.random() * 255); const g2 = Math.floor(Math.random() * 255);
const b2 = Math.floor(Math.random() * 255);

const r3 = Math.floor(Math.random() * 255); const g3 = Math.floor(Math.random() * 255);
const b3 = Math.floor(Math.random() * 255);

button1.style.backgroundColor = 'rgb(0, 0, 0)';
button2.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
button3.style.backgroundColor = `rgb(${r2}, ${g2}, ${b2})`;
button4.style.backgroundColor = `rgb(${r3}, ${g3}, ${b3})`;
// Adiciona clase selected a primeira cor
button1.classList.add('selected');
// Remove  a classe selected e adiciona a mesma na cor selecionada.
function selectColor(Event) {
  const cor = document.querySelector('.selected');
  cor.classList.remove('selected');
  Event.target.classList.add('selected');
}
button1.addEventListener('click', selectColor);
button2.addEventListener('click', selectColor);
button3.addEventListener('click', selectColor);
button4.addEventListener('click', selectColor);
// Cria as divs para represeratam os pixel a serem coloridos ( adiciona uma classa para todas as divs e um id para cada pixel).
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
