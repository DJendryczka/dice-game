let player1Score = 0;
let player2Score = 0;
let player1Turn = true;
let player1 = '';
let player2 = '';
const message = document.getElementById('message');
const player1Dice = document.getElementById('player1Dice');
const player2Dice = document.getElementById('player2Dice');
const player1Scoreboard = document.getElementById('player1Scoreboard');
const player2Scoreboard = document.getElementById('player2Scoreboard');
const rollBtn = document.getElementById('rollBtn');
const resetBtn = document.getElementById('resetBtn');
const addPlayer1 = document.getElementById('addPlayer1');
const addPlayer2 = document.getElementById('addPlayer2');
// Function getNames
// get first name
// get secound name
// store values in variab.
// display valid name when playing
// hide ather buttons before starting game
addPlayer1.addEventListener('click', function () {
  getNames();
});
function getNames() {
  player1 = document.getElementById('input').value;
  document.getElementById('input').value = '';
  addPlayer2.style.display = 'block';
  addPlayer1.style.display = 'none';
  console.log(player1);
}

function playGame(){
    rollBtn.addEventListener('click', function () {
        const randomNum = Math.floor(Math.random() * 6) + 1;
        if (player1Turn) {
          player1Score += randomNum;
          player1Scoreboard.textContent = player1Score;
          player1Dice.textContent = randomNum;
          player1Dice.classList.remove('active');
          player2Dice.classList.add('active');
          message.textContent = `${Player2}'s Turn`;
        } else {
          player2Score += randomNum;
          player2Scoreboard.textContent = player2Score;
          player2Dice.textContent = randomNum;
          player1Dice.classList.add('active');
          player2Dice.classList.remove('active');
          message.textContent = `${player1}'s Turn`;
        }
        if (player1Score >= 20) {
          message.textContent = 'Player 1 has won';
          reset();
        } else if (player2Score >= 20) {
          message.textContent = 'Player 2 has won';
          reset();
        }
        player1Turn = !player1Turn;
      });
      function reset() {
        rollBtn.style.display = 'none';
        resetBtn.style.display = 'block';
      }
      resetBtn.addEventListener('click', function () {
        resetGame();
      });
      function resetGame() {
        message.textContent = 'Player 1 Turn';
        player1Scoreboard.textContent = 0;
        player2Scoreboard.textContent = 0;
        player1Dice.textContent = '-';
        player2Dice.textContent = '-';
        player1Score = 0;
        player2Score = 0;
        player1Turn = true;
        resetBtn.style.display = 'none';
        rollBtn.style.display = 'block';
        player2Dice.classList.remove('active');
        player1Dice.classList.add('active');
      }
      
}