export default class Magic {
  constructor() {
    this.attack = 100;
    this.defence = 100;
    this.stoned = false;
  }

  setStoned() {
    this.stoned = true;
  }

  getAttack(distanse) {
    let attack = this.attack - (this.attack * 0.1 * (distanse - 1));
    if (this.stoned) {
      attack -= Math.log2(distanse) * 5;
    }
    return Math.round(attack);
  }
}
