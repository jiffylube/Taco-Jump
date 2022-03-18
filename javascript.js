let bird = document.querySelector('.bird')
let cactus = document.querySelectorAll('.cactus')

//make the bird jump
let jump = function () {
  if (bird.classList != 'jump') {
    bird.classList.add('jump');
  }
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

//pareseInt - returns first full integer from string as number
// let x = 5;
// let y = "10";
// console.log(x+y)
// let yInt = Number.parseInt("123.45 is my fav number");
// console.log(yInt);
// console.log(x + yInt);

//lists CCS values of passed through 
// console.log(this.getComputedStyle(bird))
//shows property specific CSS value
// console.log(this.getComputedStyle(bird).getPropertyValue("top"))


//Collision detection every 10 ms-

let checkOverlap = setInterval(function () {
  let birdTop =
    parseInt(document.getComputedStyle(bird).getPropertyValue("top"));
  let cactusLeft =
    parseInt(document.getComputedStyle(cactus).getPropertyValue('left'));
  // .bird has property of position   
  // width: 20px;
  // top: 400px;
  // top: 340px;   when jump animation is added
  if (cactusLeft< 40 && cactusLeft> 20 && birdTop >= 340) {
    alert('gameOver')
  }
}, 10);