const weapons = ['rock', 'paper', 'scissors'];

let computerWins = 0;
let computerLosses = 0;
let computerTies = 0;

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const playerChoice = button.id.split('-')[0];
    const computerChoice = weapons[Math.floor(Math.random() * weapons.length)];
    const result = getResult(playerChoice, computerChoice);
    displayResult(playerChoice, computerChoice, result);
  });
});

function getResult(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    computerTies++;
    return 'tie';
  } else if (playerChoice === 'rock' && computerChoice === 'scissors' || 
             playerChoice === 'paper' && computerChoice === 'rock' || 
             playerChoice === 'scissors' && computerChoice === 'paper') {
    computerLosses++;
    return 'win';
  } else {
    computerWins++;
    return 'lose';
  }
}

function displayResult(playerChoice, computerChoice, result) {
  const resultText = document.getElementById('result-text');
  const computerChoiceText = document.getElementById('computer-choice');
  const computerWinsText = document.getElementById('computer-wins');
  const computerLossesText = document.getElementById('computer-losses');
  const computerTiesText = document.getElementById('computer-ties');
  
  resultText.textContent = `You chose ${playerChoice}, computer chose ${computerChoice}. You ${result}.`;
  computerChoiceText.textContent = `Computer chose ${computerChoice}.`;
  computerWinsText.textContent = computerWins;
  computerLossesText.textContent = computerLosses;
  computerTiesText.textContent = computerTies;
}
