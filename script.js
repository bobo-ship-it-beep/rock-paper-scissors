function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        return "rock";
    } else if (randomNumber === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

// 1. 定义全局变量与 DOM 节点
let humanScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const resultDiv = document.querySelector("#results");

// 2. 单轮游戏逻辑
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        resultDiv.textContent = `It's a tie! Both chose ${humanChoice}. Score: You ${humanScore} - ${computerScore} Computer`;
    } else if (
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "rock" && computerChoice === "scissors")
    ) {
        humanScore++;
        resultDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}. Score: You ${humanScore} - ${computerScore} Computer`;
    } else {
        computerScore++;
        resultDiv.textContent = `You lose! ${computerChoice} beats ${humanChoice}. Score: You ${humanScore} - ${computerScore} Computer`;
    }

    // 每次比分变动后，检查是否有人先达到 5 分
    if (humanScore === 5) {
        resultDiv.textContent = "🎉 Game Over: You won the entire game!";
    } else if (computerScore === 5) {
        resultDiv.textContent = "💻 Game Over: The computer won the game!";
    }
}

// 3. 绑定点击事件
rockBtn.addEventListener("click", () => playRound("rock", getComputerChoice()));
paperBtn.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissorsBtn.addEventListener("click", () => playRound("scissors", getComputerChoice()));