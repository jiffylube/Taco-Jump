let bird = document.querySelector('.bird')
let cactus = document.querySelector('.cactus')
let score = document.querySelector('#score')
let gameOver = document.querySelector('#gameOver')

//score 
let playerScore = 0;
let gameStarting = null;

let scoreCounter = ()=> {
  playerScore+= 10;
  score.innerHTML = `Score <b>${playerScore}</b>`;
}

gameStarting = setInterval (scoreCounter,200)


//make the bird jump
let jump = function () {
  if (bird.classList != 'jump') {
    bird.classList.add('jump');
    setTimeout(() => {
      bird.classList.remove('jump');
    }, 500);
  }
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
    parseInt(getComputedStyle(bird).getPropertyValue("top"));
    console.log("birdTop" + birdTop)

  let cactusLeft =
    parseInt(getComputedStyle(cactus).getPropertyValue('left'));
    console.log("cactusLeft" + cactusLeft)

  // .bird has property of position   
  // width: 20px;
  // top: 400px;
  // top: 340px;   when jump animation is added

  if (cactusLeft< 70 && cactusLeft> 50 && birdTop >= 380) {
    cactus.style.animation = "none"
    console.log('gameOver')
    cactus.style.animation = "block 1s infinite linear";
  }
}, 10);