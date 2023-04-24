const startButton = document.querySelector('#start-button');
startButton.addEventListener('click', () => {
  const playerName = document.querySelector('#player-name').value;
  if (!playerName) {
    alert('Please enter a player name');
    return;
  }
  const game = new Game(playerName);
  game.start();
});
