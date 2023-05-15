import Magician from '../js/magician';
import Daemon from '../js/daemon';

test('testing class Magician', () => {
  const mag = new Magician();

  const examplObject = {
    _attack: 100,
    defence: 100,
    _stoned: false,
    type: 'magician',
    _attackOfDistanse: 100,
  };

  mag.stoned = false;
  expect(mag).toEqual(examplObject); // проверяем объект Magician
  mag.attack = 1;
  expect(mag.getAttack).toBe(100); // проверяем атаку на 1 клетке
  mag.attack = 2;
  expect(mag.getAttack).toBe(90); // проверяем атаку на 2 клетках
  mag.attack = 3;
  expect(mag.getAttack).toBe(80); // проверяем атаку на 3 клетках
  mag.attack = 5;
  expect(mag.getAttack).toBe(60); // проверяем атаку на 5 клетках

  mag.stoned = true;
  mag.attack = 1;
  expect(mag.getAttack).toBe(100); // проверяем атаку на 1 клетке
  mag.attack = 2;
  expect(mag.getAttack).toBe(85); // проверяем атаку на 2 клетках
  mag.attack = 3;
  expect(mag.getAttack).toBe(72); // проверяем атаку на 2 клетках
  mag.attack = 5;
  expect(mag.getAttack).toBe(48); // проверяем атаку на 5 клетках
});

test('testing class Daemon', () => {
  const mag = new Daemon();

  mag.stoned = false;
  mag.attack = 1;
  expect(mag.getAttack).toBe(100); // проверяем атаку на 1 клетке
  mag.attack = 2;
  expect(mag.getAttack).toBe(90); // проверяем атаку на 2 клетках
  mag.attack = 3;
  expect(mag.getAttack).toBe(80); // проверяем атаку на 3 клетках
  mag.attack = 5;
  expect(mag.getAttack).toBe(60); // проверяем атаку на 5 клетках

  mag.stoned = true;
  mag.attack = 1;
  expect(mag.getAttack).toBe(100); // проверяем атаку на 1 клетке
  mag.attack = 2;
  expect(mag.getAttack).toBe(85); // проверяем атаку на 2 клетках
  mag.attack = 3;
  expect(mag.getAttack).toBe(72); // проверяем атаку на 2 клетках
  mag.attack = 5;
  expect(mag.getAttack).toBe(48); // проверяем атаку на 5 клетках
});

test('testing error', () => {
  expect(() => {
    const mag = new Magician();
    mag.stoned = 'error';
  }).toThrow('Параметр в stoned должен быть boolean');
});
