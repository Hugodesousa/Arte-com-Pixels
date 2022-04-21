const button1 = document.getElementById('color1');
const button2 = document.getElementById('color2');
const button3 = document.getElementById('color3');
const button4 = document.getElementById('color4');

button1.style.backgroundColor = 'rgb(0, 0, 0)';
button2.style.backgroundColor = 'rgb(158, 1, 20)';
button3.style.backgroundColor = 'rgb(236, 204, 18)';
button4.style.backgroundColor = 'rgb(13, 177, 48)';
button1.classList.add('selected');

function selectColor(Event) {
  const cor = document.querySelector('.selected');
  cor.classList.remove('selected');
  Event.target.classList.add('selected');
}

button1.addEventListener('click', selectColor);
button2.addEventListener('click', selectColor);
button3.addEventListener('click', selectColor);
button4.addEventListener('click', selectColor);

const board = document.getElementById('pixel-board');

function creatPixel() {
  for (let index = 0; index < 25; index += 1) {
    const pixel = document.createElement('div');
    board.appendChild(pixel);
    pixel.classList.add('pixel');
    pixel.id = 'pix' + parseInt(index);
  }
}
// eslint-disable-next-line sonarjs/no-use-of-empty-return-value
window.onload = creatPixel();

const pix = document.getElementsByClassName('pixel');
function color() {
  
  console.log(pix)

}
 board.addEventListener('click', color)