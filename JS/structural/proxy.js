class CarAccess {
    open() {
        console.log('Opening car door');
    }

    close() {
        console.log('Closing the car door');
    }
}

// Proxy (заместитель)
class SecuritySystem {
    constructor(door) {
        this.door = door;
    }

    open(password) {
        if (this.authenticate(password)) {
            this.door.open();
        } else {
            console.log('Access denied!');
        }
    }

    authenticate(password) {
        return password === 'Max';
    }

    close() {
        this.door.close();
    }
}

const door = new SecuritySystem(new CarAccess());

door.open('Ilya');
door.open('Max');
door.close();
