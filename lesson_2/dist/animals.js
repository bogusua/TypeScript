var Cat = (function () {
    function Cat(name) {
        this.name = name;
        this.species = "Кіт";
    }
    Cat.prototype.move = function () {
        console.log("".concat(this.name, " \u0446\u0435 ").concat(this.species, " \u0456 \u0432\u0456\u043D \u0445\u043E\u0434\u0438\u0442\u044C."));
    };
    Cat.prototype.makeSound = function () {
        console.log("".concat(this.name, " \u0446\u0435 ").concat(this.species, " \u0456 \u0432\u0456\u043D \u043C\u0443\u0440\u0447\u0438\u0442\u044C."));
    };
    return Cat;
}());
var Bird = (function () {
    function Bird(name) {
        this.name = name;
        this.species = "Птах";
    }
    Bird.prototype.move = function () {
        console.log("".concat(this.name, " \u0446\u0435 ").concat(this.species, " \u0456 \u0432\u0456\u043D \u043B\u0456\u0442\u0430\u0454."));
    };
    Bird.prototype.makeSound = function () {
        console.log("".concat(this.name, " \u0446\u0435 ").concat(this.species, " \u0456 \u0432\u0456\u043D \u0449\u0435\u0431\u0435\u0447\u0435."));
    };
    return Bird;
}());
var Fish = (function () {
    function Fish(name) {
        this.name = name;
        this.species = "Риба";
    }
    Fish.prototype.move = function () {
        console.log("".concat(this.name, " \u0446\u0435 ").concat(this.species, " \u0456 \u0432\u043E\u043D\u0430 \u043F\u043B\u0430\u0432\u0430\u0454."));
    };
    return Fish;
}());
var cat = new Cat("Тузік");
cat.move();
cat.makeSound();
var bird = new Bird("Соловейко");
bird.move();
bird.makeSound();
var fish = new Fish("Немо");
fish.move();
