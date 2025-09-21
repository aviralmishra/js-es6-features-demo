function demo() {
    let localScoped = 1;

    if (true) {
        let localScoped = 2;
    }

    return localScoped; // will return 1
}

module.exports = demo;