function selectColor(Event) {
  const selet = document.querySelector('.selected');
  // console.log(selet);
  selet.classList.remove('.selected');
  Event.target.classList.add('selected');
}

const button1 = document.getElementById('color1');
button1.addEventListener('click', selectColor);

const button2 = document.getElementById('color2');
button2.addEventListener('click', selectColor);

const button3 = document.getElementById('color3');
button3.addEventListener('click', selectColor);

const button4 = document.getElementById('color4');
button4.addEventListener('click', selectColor);