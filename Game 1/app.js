let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function getChoice() {
    const choice = ['r','p','s'];
    let x = Math.floor(Math.random() * 3);
    return choice[x];
}

function convert(letter) {
    if (letter === 'r'){
        return 'Rock';
    }else if (letter === 's'){
        return 'Scissors';
    }else {
        return 'Paper';
    }
}

function win(userChoice,computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const userWord = 'user'.fontsize(3).sub();
    const compWord = 'comp'.fontsize(3).sub();
    result_p.innerHTML = `${convert(userChoice)}${userWord} beats ${convert(computerChoice)}${compWord}.You win!`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('green-glow') ,2000);
}

function lose(userChoice,computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const userWord = 'user'.fontsize(3).sub();
    const compWord = 'comp'.fontsize(3).sub();
    result_p.innerHTML = `${convert(computerChoice)}${compWord} beats ${convert(userChoice)}${userWord}.You lose!`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('red-glow') ,2000);
}
function draw(userChoice,computerChoice) {
    const userWord = 'user'.fontsize(3).sub();
    const compWord = 'comp'.fontsize(3).sub();
    result_p.innerHTML = `${convert(userChoice)}${userWord} can't beat ${convert(computerChoice)}${compWord}.It's a Draw!`;
    document.getElementById(userChoice).classList.add('grey-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('grey-glow') ,2000);
}


function game(userChoice) {
    const computerChoice = getChoice();
    // console.log('ComputerChoice' + ' ' + computerChoice);
    // console.log('UserChoice' + ' ' + userChoice);
    switch(userChoice + computerChoice){
        case "rs":
        case "sp":
        case "pr":
            win(userChoice,computerChoice);
            break;
        case "ps":
        case "rp":
        case "sr":
            lose(userChoice,computerChoice);
            break;
        case "pp":
        case "rr":
        case "ss":
            draw(userChoice,computerChoice);
            break;
    }

}

(function() {
    rock_div.addEventListener('click', () => game('r'));
    
    paper_div.addEventListener('click', () => game('p'));
    
    scissors_div.addEventListener('click', () => game('s'));
})();
