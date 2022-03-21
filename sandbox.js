let bird = document.querySelector('.bird')
let cactus = document.querySelector('.cactus')

let score = document.querySelector('#score')
let highScore = document.querySelector('#highScore')

let gameOverMessage = document.querySelector('#gameOver')

let playerScore = 0;
let playerHighScore = 0;

// let interval = null;
// don't know why code works with or without interval = null


// score
let scoreCounter = ()=> {
  playerScore+= 10;
  score.innerHTML = `Score <b>${playerScore}</b>`;
  
  
// set up High Score
  if (playerScore > playerHighScore) {
    playerHighScore = playerScore;
    highScore.innerHTML = `High Score <b>${playerHighScore}</b>`
  }
};


// n to start new game
let n = function (e) {
    if (e.key === "n") {
        gameOverMessage.style.display = "none";
        cactus.classList.add("slideActive");
        
        let playerScore = 0;
        interval = setInterval(scoreCounter, 500)
        
  }
}

document.addEventListener('keypress' , n)



// make the bird jump
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


// pareseInt - returns first full integer from string as number
// let x = 5;
// let y = "10";
// console.log(x+y)
// let yInt = Number.parseInt("123.45 is my fav number");
// console.log(yInt);
// console.log(x + yInt);

// lists CCS values of passed through 
// console.log(this.getComputedStyle(bird))
// shows property specific CSS value
// console.log(this.getComputedStyle(bird).getPropertyValue("top"))


//Collision detection every 10 ms-
function checkEveryThing() {
  
  let birdTop = parseInt(getComputedStyle(bird).getPropertyValue("top"));
  // console.log("birdTop" + birdTop)
  
  let cactusLeft = parseInt(getComputedStyle(cactus).getPropertyValue('left'));
  // console.log("cactusLeft" + cactusLeft)
  
  // .bird has property of position   
  // width: 20px;
  // top: 400px;
  // top: 340px;   when jump animation is added
  
  if (cactusLeft< 70 && cactusLeft> 50 && birdTop >= 380) {
    gameOverMessage.style.display = "block";
    cactus.classList.remove("slideActive");
    clearInterval(interval);
    playerScore = 0
  }
}

setInterval(checkEveryThing , 10)