// Variables to track scores and rounds
let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

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

    // Display the computer's choice
    document.getElementById("computer-choice").textContent = `Computer chose: ${computerChoice}`;

    // Determine the winner of the round
    if (humanChoice === computerChoice) {
        resultMessage = `It's a tie! Both chose ${humanChoice}.`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        resultMessage = `You win! ${humanChoice} beats ${computerChoice}.`;
        humanScore++;
    } else {
        resultMessage = `You lose! ${computerChoice} beats ${humanChoice}.`;
        computerScore++;
    }

    // Update results and scores on the webpage
    document.getElementById("result-message").textContent = resultMessage;
    document.getElementById("human-score").textContent = humanScore;
    document.getElementById("computer-score").textContent = computerScore;
}

// Function to play 5 rounds
function playGame(humanChoice) {
    if (roundsPlayed < 5) {
        playRound(humanChoice);
        roundsPlayed++;

        // Check if the game has ended
        if (roundsPlayed === 5) {
            declareWinner();
        }
    }
}

// Function to declare the winner
function declareWinner() {
    const finalMessage = document.getElementById("final-message");
    if (humanScore > computerScore) {
        finalMessage.textContent = `Congratulations! You won the game ${humanScore} to ${computerScore}.`;
    } else if (humanScore < computerScore) {
        finalMessage.textContent = `You lost the game ${computerScore} to ${humanScore}. Better luck next time!`;
    } else {
        finalMessage.textContent = `It's a tie! Both scored ${humanScore}.`;
    }

    // Reset the game state
    resetGame();
}

// Function to reset the game
function resetGame() {
    humanScore = 0;
    computerScore = 0;
    roundsPlayed = 0;

    // Clear previous results
    setTimeout(() => {
        document.getElementById("human-score").textContent = "0";
        document.getElementById("computer-score").textContent = "0";
        document.getElementById("result-message").textContent = "Make your move!";
        document.getElementById("computer-choice").textContent = "Computer chose:";
        document.getElementById("final-message").textContent = "";
    }, 5000); // Wait 5 seconds before clearing
}

// Event listeners for buttons
document.getElementById("rock").addEventListener("click", () => playGame("rock"));
document.getElementById("paper").addEventListener("click", () => playGame("paper"));
document.getElementById("scissors").addEventListener("click", () => playGame("scissors"));
