function getComputerChoice() {

    let randomNumber = Math.floor(Math.random() * 3 + 1 );

    if (randomNumber === 1) {
        return "rock";
    } else if (randomNumber === 2){
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice =  prompt("What's your choice? (Rock, Paper, or Scissors)");
    return choice;
}

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        
        humanChoice = humanChoice.toLowerCase();

            if (humanChoice === "scissors" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "paper" || humanChoice === "rock" && computerChoice === "rock") {
                console.log(`It's a tie! Both chose ${humanChoice}.`)
            } else if (humanChoice === "scissors" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "rock" && computerChoice === "scissors") {
                console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
                humanScore++;
            } else {
                computerScore++;
                console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
            }
    }

    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    

    console.log(`Final Score: You: ${humanScore} | computer: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("Game Over: You won the entire game!");
    } else if (humanScore < computerScore) {
        console.log("Game Over: The computer won the game!");
    } else {
        console.log("Game Over: The whole game ended in a tie!");
    }
}   

playGame();
