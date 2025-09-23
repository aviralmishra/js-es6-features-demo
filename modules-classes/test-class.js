class User {
    constructor(name, username) {
        this._name = name;
        this.username = username;
    }

    static goodbye() {
        console.log('Bye bye...');
    }

    get name() {
        return this._name.toUpperCase();
    }

    set name(value) {
        this._name = value;
    }

    greet() {
        console.log(`Hello ${this.name} (${this.username}), have a good day!`);
    }
}

class AdminUser extends User {
    constructor(name, username) {
        super(name, username);
        this.superPowers = true;
    }

    greet() {
        console.log(`Hello admin ${this.name} (${this.username}), enjoy!`);
    }
}

let user = new User('Mark Smith', 'msmith002');
user.greet();

User.goodbye();

let adminUser = new AdminUser('Adam Smith', 'asmith002');
adminUser.greet();
