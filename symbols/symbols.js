let person = {
    name: 'Adam',
};
let ageSymbol = Symbol.for('age');

function setAge() {
    person[ageSymbol] = 30;
}

setAge();
console.log(person[ageSymbol]);
