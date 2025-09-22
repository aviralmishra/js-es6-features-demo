function demo(...toAdd) {
    let total = 0;

    for (let i of toAdd) {
        total += i;
    }

    return total;
}

module.exports = demo;