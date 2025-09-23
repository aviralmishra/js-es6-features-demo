class User {
    constructor(name, username) {
        this.name = name;
        this.username = username;
    }

    greet() {
        console.log(`Hello ${this.name} (${this.username}), Have a good day!`);
    }
}

let user = new User('Mark Smith', 'msmith002');
user.greet();
