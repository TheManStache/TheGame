// Define an object for each Pokemon
const pokemonList = [
// TODO: Add Pokemon objects here
];

// Define the player's and computer's current Pokemon
let playerPokemon;
let computerPokemon;

// Define the range for each attack
const basicAttackRange = 2;
const abilityRange = 3;

// Define the criteria for each Pokemon's ability
const abilityCriteria = {
Pikachu: {
type: 'special',
range: 3,
effect: 'paralyze',
chance: 0.25
},
Charizard: {
type: 'physical',
range: 2,
effect: 'burn',
chance: 0.5
},
Squirtle: {
type: 'heal',
range: 3,
effect: 'heal',
chance: 1.0
}
};

// Define the items available for purchase
const itemList = [
// TODO: Add items here
];

// Define the player's money and items
let playerMoney = 500;
const playerItems = [];

// Function to select a random Pokemon for the computer
function selectRandomPokemon() {
const index = Math.floor(Math.random() * pokemonList.length);
return Object.assign({}, pokemonList[index]); // Create a new object so we don't modify the original
}

// Function to start a new game
function startGame() {
playerPokemon = null;
computerPokemon = null;
console.log('Welcome to Pokemon Battle Simulator!');
console.log('You have 500 money to spend on a Pokemon and items. Good luck!');
}

// Function to handle buying a Pokemon
function buyPokemon(pokemonName) {
const pokemon = pokemonList.find(p => p.name === pokemonName);
const cost = pokemon.tier * 100; // Tier 1 costs 100, Tier 2 costs 200, etc.
if (playerMoney < cost) {
console.log("You don't have enough money to buy this Pokemon!");
return;
}
playerMoney -= cost;
const newPokemon = Object.assign({}, pokemon); // Create a new object so we don't modify the original
newPokemon.currentHp = newPokemon.maxHp; // Set the new Pokemon's HP to its maximum
playerPokemon = newPokemon;
console.log(You bought a ${newPokemon.name}!);
}

// Function to handle when the player buys an item
function buyItem(itemName) {
const item = itemList.find(i => i.name === itemName);
if (playerMoney < item.cost) {
console.log("You don't have enough money to buy this item!");
return;
}
playerMoney -= item.cost;
playerItems.push(item);
console.log(You bought a ${item.name}!);
}

// Function to handle when the player uses an item
function useItem(itemName) {
const item = playerItems.find(i => i.name === itemName);
if (!item) {
console.log(Item ${itemName} not found!);
return;
}
if (!item.use(playerPokemon)) {
console.log(Could not use item ${itemName} on ${playerPokemon.name});
return;
}
console.log(Used item ${itemName} on ${playerPokemon.name});
}

// Function to handle the computer's turn
function computerTurn() {
const distance = computeDistance(playerPokemon, computerPokemon);
if (distance <= basicAttackRange) {
basicAttack(computerPokemon, playerPokemon);
} else if (distance <= abilityRange) {
const criteria = abilityCriteria[computerPokemon.name];
