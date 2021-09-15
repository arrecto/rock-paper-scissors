const playButton = document.querySelector('#play-button');
const weapons = document.querySelectorAll('.img-weapon');
const playerContainer = document.querySelector('div#player-choice-container');
const computerContainer = document.querySelector('div#computer-choice-container');
const roundContainer = document.querySelector('p.round-number');
const playerCurrentScore = document.querySelector('p#player-current-score');
const computerCurrentScore = document.querySelector('p#computer-current-score');

let computerWeapon, playerWeapon;
let playerScore = computerScore = 0;
let round = 1;


function compareWithComputer(e)
{
    if(round<=5)
    {    playerWeapon = e.path[0].id;
        //putting the selected picture into the container;
        playerContainer.className = "player-weapon";
        playerContainer.style.background = `url(images/${playerWeapon}.jpg)`;
        playerContainer.style.backgroundSize = '150px 150px';

        computerChoice();

        if (computerWeapon=='rock'&&playerWeapon=='paper'||
            computerWeapon=='paper'&&playerWeapon=='scissors'||
            computerWeapon=='scissors'&&playerWeapon=='rock'){
                playerScore++;
                playerCurrentScore.textContent=playerScore.toString();
            }
            else if (computerWeapon=='paper'&&playerWeapon=='rock'||
                    computerWeapon=='scissors'&&playerWeapon=='paper'||
                    computerWeapon=='rock'&&playerWeapon=='scissors'){
                computerScore++;
                computerCurrentScore.textContent=computerScore.toString();
            }
        
        roundContainer.className = "round-active";
        roundContainer.textContent = round.toString();

        if (computerWeapon!=playerWeapon) round++;
    }
    if(round>5)
    {
        let winner = (playerScore>computerScore ? 'You' : 'Computer');
        alert(`Winner: ${winner}\nPress 'PLAY' to play again.`);
    }
}

function computerChoice() {
    let x= Math.floor(Math.random()*10/3.3);
    if (x==0) computerWeapon = "rock";
    else computerWeapon = (x==1 ? 'paper' : 'scissors');

    console.log(computerWeapon, x);
    computerContainer.className = "player-weapon";
    computerContainer.style.background = `url(images/${computerWeapon}.jpg)`;
    computerContainer.style.backgroundSize = '150px 150px';
}

function playerDecision(){
    console.log('playgame done');
    for(i=0;i<weapons.length;i++){
        weapons[i].addEventListener('click', compareWithComputer);
    }

    round=1;
    playerScore = computerScore = 0;
    playerCurrentScore.textContent='0';
    computerCurrentScore.textContent='0';
    roundContainer.textContent = '';
}

playButton.addEventListener('click', playerDecision);


    









/*
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
console.log('Thank you for playing!');

*/