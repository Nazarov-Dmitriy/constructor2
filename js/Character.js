export default class Character {
  constructor(name, type) {
    try {
      if ((type === 'Bowman' || type === 'Swordsman' || type === 'Magician' || type === 'Daemon' || type === 'Undead' || type === 'Zombie') &&
        (name.length >= 2 && name.length <= 10)) {
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack;
        this.defence;
      } else {
        throw new Error('Некорректные данные');
      }
    } catch (e) {
      console.log(e);
    }
  }

  levelUp() {
    this.health = 100;
    this.level++;
    this.attack = this.attack + this.attack * 0.2;
    this.defence = this.defence + this.defence * 0.2;;
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}
