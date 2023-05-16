import Magician from '../js/magician';
import Daemon from '../js/daemon';

test('testing class Magician', () => {
  const mag = new Magician();

  const examplObject = {
    _attack: 100,
    defence: 100,
    _stoned: false,
    type: 'magician',
  };

  mag.stoned = false;
  mag.attack = 100;
  expect(mag).toEqual(examplObject); // проверяем объект Magician
  expect(mag.getAttack(1)).toBe(100); // проверяем атаку на 1 клетке
  expect(mag.getAttack(2)).toBe(90); // проверяем атаку на 2 клетках
  expect(mag.getAttack(3)).toBe(80); // проверяем атаку на 3 клетках
  expect(mag.getAttack(5)).toBe(60); // проверяем атаку на 5 клетках

  mag.stoned = true;
  expect(mag.getAttack(1)).toBe(100); // проверяем атаку на 1 клетке
  expect(mag.getAttack(2)).toBe(85); // проверяем атаку на 2 клетках
  expect(mag.getAttack(3)).toBe(72); // проверяем атаку на 2 клетках
  expect(mag.getAttack(5)).toBe(48); // проверяем атаку на 5 клетках
});

test('testing class Daemon', () => {
  const mag = new Daemon();

  const examplObject = {
    _attack: 100,
    defence: 100,
    _stoned: false,
    type: 'daemon',
  };

  mag.stoned = false;
  mag.attack = 100;
  expect(mag).toEqual(examplObject); // проверяем объект Magician
  expect(mag.getAttack(1)).toBe(100); // проверяем атаку на 1 клетке
  expect(mag.getAttack(2)).toBe(90); // проверяем атаку на 2 клетках
  expect(mag.getAttack(3)).toBe(80); // проверяем атаку на 3 клетках
  expect(mag.getAttack(5)).toBe(60); // проверяем атаку на 5 клетках

  mag.stoned = true;
  expect(mag.getAttack(1)).toBe(100); // проверяем атаку на 1 клетке
  expect(mag.getAttack(2)).toBe(85); // проверяем атаку на 2 клетках
  expect(mag.getAttack(3)).toBe(72); // проверяем атаку на 2 клетках
  expect(mag.getAttack(5)).toBe(48); // проверяем атаку на 5 клетках
});

test('testing error of set stouned', () => {
  expect(() => {
    const mag = new Magician();
    mag.stoned = 'error';
  }).toThrow('Параметр в stoned должен быть boolean');
});

test('testing error of set attack', () => {
  expect(() => {
    const mag = new Magician();
    mag.attack = 120;
  }).toThrow('Передаваемое значение атаки должно быть полложительным и меньше 100');
});
