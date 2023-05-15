export default class Magic {
  constructor() {
    // ESLint выдаёт ошибку при использовании нижнего подчёркивания
    // поэтому добавил эту стоку ниже

    /* eslint no-underscore-dangle: 0 */
    this._attack = 100;
    this.defence = 100;
    this._stoned = false;
    this._attackOfDistanse = 100;
  }

  get getStoned() {
    return this._stoned;
  }

  set stoned(parametr) {
    if (typeof parametr === 'boolean') {
      if (parametr) {
        this._stoned = true;
      } else {
        this._stoned = false;
      }
    } else {
      throw new Error('Параметр в stoned должен быть boolean');
    }
  }

  set attack(distanse) {
    this._attackOfDistanse = this._attack - (this._attack * 0.1 * (distanse - 1));
    if (this.getStoned) {
      this._attackOfDistanse -= Math.log2(distanse) * 5;
      this._attackOfDistanse = Math.round(this._attackOfDistanse);
    }
  }

  get getAttack() {
    return this._attackOfDistanse;
  }
}
