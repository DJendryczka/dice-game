let player1Score = 0;
let player2Score = 0;
let player1Turn = true;

const message = document.getElementById('message');
const player1Dice = document.getElementById('player1Dice');
const player2Dice = document.getElementById('player2Dice');
const player1Scoreboard = document.getElementById('player1Scoreboard');
const player2Scoreboard = document.getElementById('player2Scoreboard');
const rollBtn = document.getElementById('rollBtn');
const resetBtn = document.getElementById('resetBtn');

rollBtn.addEventListener('click', function () {
  const randomNum = Math.floor(Math.random() * 6) + 1;
  if (player1Turn) {
    player1Score += randomNum;
    player1Scoreboard.textContent = player1Score;
    player1Dice.textContent = randomNum;
    player1Dice.classList.remove('active');
    player2Dice.classList.add('active');
    message.textContent = 'Player 2 Turn';
  } else {
    player2Score += randomNum;
    player2Scoreboard.textContent = player2Score;
    player2Dice.textContent = randomNum;
    player1Dice.classList.add('active');
    player2Dice.classList.remove('active');
    message.textContent = 'Player 1 Turn';
  }
  if(player1Score >= 20){
    message.textContent = 'Player 1 has won';
    reset()
  }else if(player2Score >= 20){
    message.textContent = 'Player 2 has won';
    reset()
  }
  player1Turn = !player1Turn;
});
function reset(){
    if(player1Score >= 20 || player2Score >= 20 ){
        rollBtn.style.display = "none"
    resetBtn.style.display ='block'
    }
}
