const localScope = require('./local-scope');
const arrowFunction = require('./arrow-function');
const defaultParameters = require('./default-parameters');
const objectLiteralExtensions = require('./object-literal-extensions');
const restOperator = require('./rest-operator');

test('tests local scope', () => {
  expect(localScope()).toEqual(1);
});

test('tests arrow function', () => {
  expect(arrowFunction(2, 3)).toEqual(5);
});

test('tests default parameters', () => {
  expect(defaultParameters(3)).toEqual(9.42);
});

test('tests object literal extensions', () => {
  expect(objectLiteralExtensions().name).toEqual('Max');
});

test('tests rest operator', () => {
  expect(restOperator(1, 2, 3, 4, 5)).toEqual(15);
});
