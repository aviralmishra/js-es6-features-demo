function demo(...toAdd) {
    let total = 0;

    for (let i of toAdd) {
        total += i;
    }

    return total;
}

console.log(demo(1, 2, 3, 4, 5));
