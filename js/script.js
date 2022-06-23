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

rollBtn.addEventListener('click', function(){
    const randomNum = Math.floor(Math.random() * 6) +1
    if (player1Turn){
        player1Dice.textContent = randomNum
        console.log(`Player 1 ${randomNum}`)
    } else {
        player2Dice.textContent = randomNum
        console.log('Player 2 ' + randomNum)
    }
    player1Turn = !player1Turn
})
