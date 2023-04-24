class Pokemon {
  constructor(name, type, moves = [], hp = 100) {
    this.name = name;
    this.type = type;
    this.moves = moves;
    this.hp = hp;
  }

  speak() {
    console.log(`${this.name} (${this.type})`);
  }

  chooseMove(moveIndex) {
    console.log(`${this.name} used ${this.moves[moveIndex]}!`);
  }

  takeDamage(damage) {
    this.hp = Math.max(0, this.hp - damage);
    console.log(`${this.name} took ${damage} damage!`);
    if (this.hp === 0) {
      console.log(`${this.name} has fainted!`);
    }
  }
}
