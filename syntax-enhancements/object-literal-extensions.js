function demo() {
    let name = 'Max';
    let age = 30;

    return {
        name,
        age,
        greet() {
            console.log(this.name + ', ' + this.age)
        }
    }
}

// demo().greet();
module.exports = demo;