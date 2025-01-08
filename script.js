// Variables to track scores
let humanScore = 0;
let computerScore = 0;

// Function to get computer's choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to play a single round
function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    let resultMessage = "";

    if (humanChoice === computerChoice) {
        resultMessage = `It's a tie! Both chose ${humanChoice}`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        resultMessage = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    } else {
        resultMessage = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    }

    // Update the results on the webpage
    document.getElementById("result-message").textContent = resultMessage;
    document.getElementById("human-score").textContent = humanScore;
    document.getElementById("computer-score").textContent = computerScore;
}

// Event listeners for buttons
document.getElementById("rock").addEventListener("click", () => playRound("rock"));
document.getElementById("paper").addEventListener("click", () => playRound("paper"));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));
