function demo() {
    let numbers = [1, 2, 3];
    let [p, q, r, s = 4] = numbers;
    console.log(`${p}, ${q}, ${r}, ${s}`);

    let a = 5;
    let b = 10;
    [a, b] = [b, a];
    console.log(`${a}, ${b}`);

    let user = {
        name: 'John',
        age: 27,
    };
    let { name, age } = user;
    console.log(`${name}, ${age}`);
}

demo();
