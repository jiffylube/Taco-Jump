let bird = document.querySelector('.bird')

let singleJump = 45;

let jump = function () {
  singleJump += 50;
  bird.style.bottom = singleJump + 'px';
}
  
  let spaceBar = function (e) {
    if (e.keyCode === 32) {
      jump()
    }
  }
  
document.addEventListener('keypress', spaceBar)