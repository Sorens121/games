/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
let scores,roundScore,activePlayer,gamePlaying;

const player_0_div = document.querySelector('.player-0-panel');
const player_1_div = document.querySelector('.player-1-panel');
const btnNew = document.querySelector('.btn-new');
const btnRoll = document.querySelector('.btn-roll');
const btnHold = document.querySelector('.btn-hold');
const diceSrc = document.querySelector('.dice');

const score0 = document.getElementById('score-0');
const score1 = document.getElementById('score-1');
const current0 = document.getElementById('current-0');
const current1 = document.getElementById('current-1');
const name0 = document.getElementById('name-0');
const name1 = document.getElementById('name-1');

init();

const event = btnRoll.addEventListener('click',() => {

    if(gamePlaying){
        // generate random numbers
        let dice = Math.floor(Math.random()*6) + 1;

        // getting new dice image to the corresponding number
        diceSrc.style.display = 'block';
        diceSrc.src = `img/dice-${dice}.png`;

        // update the round score if dice is not equal to 1 then add the scores else move to next player 
        if(dice!== 1){
            roundScore += dice;
            document.querySelector(`#current-${activePlayer}`).textContent = roundScore;
        }
        else{
            nextPlayer();
        }
    }
    
});

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    diceSrc.style.display = 'none';
    current0.textContent = '0';
    current1.textContent = '0';
    player_0_div.classList.toggle('active');
    player_1_div.classList.toggle('active');
}

const holdEvent = btnHold.addEventListener('click', () => {
    if(gamePlaying){
        scores[activePlayer] += roundScore;
        document.querySelector(`#score-${activePlayer}`).textContent = scores[activePlayer];
        if(scores[activePlayer] >=20){
            document.querySelector(`#name-${activePlayer}`).textContent = 'WINNER!!!';
            diceSrc.style.display = 'none';
            document.querySelector(`.player-${activePlayer}-panel`).classList.add('winner');
            document.querySelector(`.player-${activePlayer}-panel`).classList.remove('active');
            gamePlaying = false;
        }
        else{
            nextPlayer();
        }

    }
});

btnNew.addEventListener('click',init);

function init() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    // resetting every thing to zero/defaults
    diceSrc.style.display = 'none';
    score0.textContent = '0';
    score1.textContent = '0';
    current0.textContent = '0';
    current1.textContent = '0';
    name0.textContent = 'Player 1';
    name1.textContent = 'Player 2';
    player_0_div.classList.remove('winner');
    player_1_div.classList.remove('winner');
    player_0_div.classList.remove('active');
    player_1_div.classList.remove('active');

    player_0_div.classList.add('active');
}