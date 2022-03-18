let bird = document.querySelector('.bird')
let cactus = document.querySelectorAll('.cactus')

//make the bird jump
let jump = function () {
  bird.classList.add('jump');
  setTimeout(() => {
    bird.classList.remove('jump');
  }, 500);
}

let spaceBar = function (e) {
  if (e.keyCode === 32) {
    jump()
  }
}

document.addEventListener('keypress', spaceBar)