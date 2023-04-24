// Pokemon Class
class Pokemon {
  constructor(name, health, attackDamage) {
    this.name = name;
    this.health = health;
    this.attackDamage = attackDamage;
  }

  // Attack method
  attack(target) {
    target.health -= this.attackDamage;
    console.log(`${this.name} attacked ${target.name}!`);
    console.log(`${target.name} has ${target.health} health remaining.`);
    if (target.health <= 0) {
      console.log(`${target.name} has fainted!`);
    }
  }
}

// Create Pokemons
const pikachu = new Pokemon("Pikachu", 100, 10);
const charmander = new Pokemon("Charmander", 80, 8);

// Test the Attack method
pikachu.attack(charmander);
charmander.attack(pikachu);
