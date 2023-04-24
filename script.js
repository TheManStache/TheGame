// Select elements from the HTML
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const resultText = document.getElementById("result-text");
const computerChoiceText = document.getElementById("computer-choice");

// Create an array of choices
const choices = ["rock", "paper", "scissors"];

// Function to generate a random computer choice
function computerPlay() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to check the result of the game
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "You win!";
  } else {
    return "Computer wins!";
  }
}

// Function to update the result text and computer choice text
function updateResult(result, computerChoice) {
  resultText.textContent = result;
  computerChoiceText.textContent = `Computer chose ${computerChoice}.`;
}

// Event listeners for each button
rockButton.addEventListener("click", () => {
  const computerSelection = computerPlay();
  const result = playRound("rock", computerSelection);
  updateResult(result, computerSelection);
});

paperButton.addEventListener("click", () => {
  const computerSelection = computerPlay();
  const result = playRound("paper", computerSelection);
  updateResult(result, computerSelection);
});

scissorsButton.addEventListener("click", () => {
  const computerSelection = computerPlay();
  const result = playRound("scissors", computerSelection);
  updateResult(result, computerSelection);
});
