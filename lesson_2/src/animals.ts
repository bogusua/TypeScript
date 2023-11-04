interface Animal {
    name: string;
    species: string;
    move(): void;
    makeSound?(): void;
}

class Cat implements Animal {
    name: string;
    species: string;

    constructor(name: string) {
        this.name = name;
        this.species = "Кіт";
    }

    move() {
        console.log(`${this.name} це ${this.species} і він ходить.`);
    }

    makeSound() {
        console.log(`${this.name} це ${this.species} і він мурчить.`);
    }
}

class Bird implements Animal {
    name: string;
    species: string;

    constructor(name: string) {
        this.name = name;
        this.species = "Птах";
    }

    move() {
        console.log(`${this.name} це ${this.species} і він літає.`);
    }

    makeSound() {
        console.log(`${this.name} це ${this.species} і він щебече.`);
    }
}

class Fish implements Animal {
    name: string;
    species: string;

    constructor(name: string) {
        this.name = name;
        this.species = "Риба";
    }

    move() {
        console.log(`${this.name} це ${this.species} і вона плаває.`);
    }
}

const cat = new Cat("Тузік");
cat.move();
cat.makeSound();

const bird = new Bird("Соловейко");
bird.move();
bird.makeSound();

const fish = new Fish("Немо");
fish.move();
