var playArea = document.getElementById('playArea');
var ball = document.getElementById('ball');

var t = playArea.offsetTop;
var w = playArea.offsetWidth;
var h = playArea.offsetHeight;


function updatePosition() {
  ball.style.left = Math.floor(Math.random() * w) - 100 + 'px';
  ball.style.top = Math.floor(Math.random() * h) + t - 100 + 'px';
  console.log({ t, w, h });
}

function hideBall() {
  ball.classList.add('hide');
  console.log('hide');
}

ball.addEventListener('click', hideBall);


setInterval(() => {
  // updatePosition();
}, 200);