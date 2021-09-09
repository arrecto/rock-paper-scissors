let playerDecision='yes';
let playerScore = 0, computerScore = 0;

//will loop if the player decides to play;
while(playerDecision=='yes'){
    let round=1;
    playerScore = 0;
    computerScore = 0;
    while (round<=5){


    //this will generate random number between 1 to 3 and has a corresponding return value of rock,paper, or scissors;
    function computerPlay() {
        let x = Math.floor((Math.random()*100)/33)+1;
        if (x==1) return 'rock';
        else if (x==2) return 'paper';
        else return 'scissors';
    }

    let computerSelection = computerPlay();

    //asks the player which weapon to choose;
    let playerSelection = prompt("Choose one among: rock, paper, and scissors");

    //converting everything to lowercase to avoid case sensitivity;
    playerSelection = playerSelection.toLowerCase();

    //comparing the choices of the computer and player;
    function compareChoices(computerSelection, playerSelection) {
        if (computerSelection=='rock'&&playerSelection=='paper'||
            computerSelection=='paper'&&playerSelection=='scissors'||
            computerSelection=='scissors'&&playerSelection=='rock'){
            playerScore++;
        }
        else if (computerSelection=='paper'&&playerSelection=='rock'||
            computerSelection=='scissors'&&playerSelection=='paper'||
            computerSelection=='rock'&&playerSelection=='scissors'){
            computerScore++;
        }
    }
    compareChoices(computerSelection, playerSelection);
    round++;
}
console.log('computer: '+computerScore+'\nplayer: '+playerScore);

if (computerScore>playerScore) alert('You lose');
else if (computerScore<playerScore) alert('You win');
else alert('It\'s a tie');

playerDecision = prompt('Do you want to play again? yes/no');
playerDecision = playerDecision.toLowerCase();
}
console.log('Thank you for playing!')