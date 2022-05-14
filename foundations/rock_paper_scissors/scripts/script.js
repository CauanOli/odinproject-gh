/*Function that randomly returns 'Rock', 'Paper', 'Scissors'*/
let computerPoints = 0;
let playerPoints = 0;

function computerPlay(){
    let play = (parseInt(Math.random()*4));
    if (play === 0){
        return 'rock';
    } else if (play === 1){
        return 'paper';
    } else{
        return 'scissors';
    }
};

// Function that plays the game of rock, paper, scissors and prints the winner to the console
function playRound(e){

    // Variables
    let tie;
    let winner, winnerSelection, loserSelection, roundWinner;
    let computerSelection = computerPlay();
    let playerSelection = this.classList.value;

    if (playerSelection == computerSelection){
        tie = 1;
    } else if((computerSelection == 'paper' && playerSelection == 'rock') || (computerSelection == 'rock' && playerSelection == 'scissors') || (computerSelection == 'scissors' && playerSelection == 'paper')){
        winner = 'Computer';
        computerPoints++;
        winnerSelection = computerSelection.toUpperCase();
        loserSelection = playerSelection.toUpperCase();
    } else {
        winner = 'Player';
        playerPoints++;
        winnerSelection = playerSelection.toUpperCase();
        loserSelection = computerSelection.toUpperCase();
    }


    if (playerPoints == 5 || computerPoints == 5) {
        (playerPoints > computerPoints) ? roundWinner = 'PLAYER' : roundWinner = 'COMPUTER';
        modal_p.innerText = `WINNER IS ${roundWinner}! CONTINUE?`
        modal.classList.add('active');
        playerPoints = 0;
        computerPoints = 0;
    } else {
        (tie == 1) ? results.innerText = (`A TIE! ${playerSelection.toUpperCase()} ${computerSelection.toUpperCase()}`) : results.innerText = (`WINNER IS ${winner.toUpperCase()}, ${winnerSelection} BEATS ${loserSelection}`);
    }

    placar.innerText = `PLAYER: ${playerPoints} COMPUTER: ${computerPoints}`
}

// ROCK, PAPER, SCISSORS BUTTONS
const buttons = document.querySelectorAll('button');
buttons.forEach(buttons => buttons.addEventListener('click', playRound));

// MODAL
const modal = document.querySelector('.modal');
const modal_p = document.querySelector('.modal_p');
const modal_b = document.querySelector('.modal_b');
modal_b.removeEventListener('click', playRound);
modal_b.addEventListener('click', () => modal.classList.remove('active'));

// RESULTS AND PLACAR
const results = document.querySelector('.results');
const placar = document.querySelector('.placar');