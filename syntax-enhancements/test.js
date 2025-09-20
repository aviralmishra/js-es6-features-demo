const localScope = require('./local-scope');
const add = require('./arrow-function');
const area = require('./default-parameters');

test('tests local scope', () => {
  expect(localScope()).toEqual(1);
});

test('tests arrow function', () => {
  expect(add(2, 3)).toEqual(5);
});

test('tests default parameters', () => {
  expect(area(3)).toEqual(9.42);
});