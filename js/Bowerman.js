import Character from './Character.js';

export default class Bowerman extends Character {
  constructor(name, type, health, level) {
    super(name, type, health, level);
    this.attack = 25;
    this.defence = 25;
  }
}

let result = new Bowerman('Bowerman', 'Bowman');
  result.levelUp();
  console.log(result);
