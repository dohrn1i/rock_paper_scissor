function computerPlay() {
const vals = ["rock", "paper", "scissors"];
const random = Math.floor(Math.random() * vals.length);
return (vals[random]);
}

playerScore = 0;
computerScore = 0;

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();

    if (player == computer) {
        console.log("Draw!");
    } else if ((computer == "rock" && player == "scissors") ||
    (computer == "scissors" && player == "paper") ||
    (computer == "paper" && player == "rock")) {
        console.log("You lose!");
        computerScore = ++computerScore;
    } else {
        console.log("You Win!");
        playerScore = ++playerScore;
    }
}

function game() {
    let i = 0;
    while (i < 5) {
        let playerSelection = prompt("Select option: ");
        let computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        i++;
    }
    console.log("Player: " + playerScore);
    console.log("Computer: " + computerScore);
    if (computerScore > playerScore) {
        console.log("YOU FUCKED UP");
    } else if (computerScore < playerScore){
        console.log("YOU LUCKED UP");
    } else {
        console.log("WELL");
    }
}

game();


