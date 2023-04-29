import Magician from '../js/magician';
import Daemon from '../js/daemon';

test('testing class Magician', () => {
  const mag = new Magician();

  const examplObject = {
    attack: 100,
    defence: 100,
    stoned: false,
    type: 'magician',
  };

  expect(mag).toEqual(examplObject); // проверяем объект Magician
  expect(mag.getAttack(1)).toBe(100); // проверяем атаку на 1 клетке
  expect(mag.getAttack(2)).toBe(90); // проверяем атаку на 2 клетках
  expect(mag.getAttack(3)).toBe(80); // проверяем атаку на 3 клетках
  expect(mag.getAttack(5)).toBe(60); // проверяем атаку на 5 клетках

  mag.setStoned();
  expect(mag.getAttack(1)).toBe(100); // проверяем атаку на 1 клетке
  expect(mag.getAttack(2)).toBe(85); // проверяем атаку на 2 клетках
  expect(mag.getAttack(3)).toBe(72); // проверяем атаку на 2 клетках
  expect(mag.getAttack(5)).toBe(48); // проверяем атаку на 5 клетках
});

test('testing class Daemon', () => {
  const mag = new Daemon();

  const examplObject = {
    attack: 100,
    defence: 100,
    stoned: false,
    type: 'daemon',
  };

  expect(mag).toEqual(examplObject); // проверяем объект Daemon
  expect(mag.getAttack(1)).toBe(100); // проверяем атаку на 1 клетке
  expect(mag.getAttack(2)).toBe(90); // проверяем атаку на 2 клетках
  expect(mag.getAttack(3)).toBe(80); // проверяем атаку на 3 клетках
  expect(mag.getAttack(5)).toBe(60); // проверяем атаку на 5 клетках

  mag.setStoned();
  expect(mag.getAttack(1)).toBe(100); // проверяем атаку на 1 клетке
  expect(mag.getAttack(2)).toBe(85); // проверяем атаку на 2 клетках
  expect(mag.getAttack(3)).toBe(72); // проверяем атаку на 2 клетках
  expect(mag.getAttack(5)).toBe(48); // проверяем атаку на 5 клетках
});
