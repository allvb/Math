export default class Magic {
  constructor() {
    this.attack = 100;
    this.defence = 100;
    // this.stoned = false;
  }

  getStoned() {
    return this.stoned;
  }

  setStoned() {
    this.stoned = true;
  }

  setAttack(distanse) {
    let attack = this.attack - (this.attack * 0.1 * (distanse - 1));
    if (this.getStoned()) {
      attack -= Math.log2(distanse) * 5;
    }
    return Math.round(attack);
  }

  getAttack(distanse) {
    return this.setAttack(distanse);
  }
}
