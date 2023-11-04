var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = (function () {
    function Car(type, brand, model, engine, price) {
        this.addPrice = 100;
        this.type = type;
        this.brand = brand;
        this.model = model;
        this.engine = engine;
        this.price = price + this.addPrice;
    }
    Car.prototype.showCarInfo = function () {
        var additionalParams = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            additionalParams[_i] = arguments[_i];
        }
        console.log("\u0422\u0438\u043F: ".concat(this.type));
        console.log("\u041C\u0430\u0440\u043A\u0430: ".concat(this.brand));
        console.log("\u041C\u043E\u0434\u0435\u043B\u044C: ".concat(this.model));
        console.log("\u0414\u0432\u0438\u0433\u0443\u043D: ".concat(this.engine));
        console.log("\u0426\u0456\u043D\u0430: ".concat(this.price));
        additionalParams.forEach(function (param) {
            console.log(param[0] + ': ' + param[1]);
        });
        console.log('========================================');
    };
    return Car;
}());
var SUV = (function (_super) {
    __extends(SUV, _super);
    function SUV(brand, model, engine, price, is4x4) {
        var _this = _super.call(this, 'SUV', brand, model, engine, price) || this;
        _this.is4x4 = is4x4;
        return _this;
    }
    SUV.prototype.showCarInfo = function () {
        _super.prototype.showCarInfo.call(this, ['Чи є 4х4', this.is4x4]);
    };
    return SUV;
}(Car));
var Sedan = (function (_super) {
    __extends(Sedan, _super);
    function Sedan(brand, model, engine, price, color) {
        var _this = _super.call(this, 'Sedan', brand, model, engine, price) || this;
        _this.color = color;
        return _this;
    }
    Sedan.prototype.showCarInfo = function () {
        _super.prototype.showCarInfo.call(this, ['Колір', this.color]);
    };
    return Sedan;
}(Car));
var SportCar = (function (_super) {
    __extends(SportCar, _super);
    function SportCar(brand, model, engine, price, topSpeed, color) {
        var _this = _super.call(this, 'Sport Car', brand, model, engine, price) || this;
        _this.topSpeed = topSpeed;
        _this.color = color;
        return _this;
    }
    SportCar.prototype.showCarInfo = function () {
        _super.prototype.showCarInfo.call(this, ['Максимальна швидкість', this.topSpeed], ['Колір', this.color]);
    };
    return SportCar;
}(Car));
var Ferrari488 = new SportCar('Ferrari', '488 GTB', 'V8', 200000, 330, 'червоний');
Ferrari488.showCarInfo();
var LamborghiniHuracan = new SportCar('Lamborghini', 'Huracan', 'V10', 250000, 325, 'жовтий');
LamborghiniHuracan.showCarInfo();
var Porsche911 = new SportCar('Porsche', '911', 'Flat-6', 180000, 310, 'синій');
Porsche911.showCarInfo();
var JeepCherokee = new SUV('Jeep', 'Grand Cherokee', 'V6', 80000, true);
JeepCherokee.showCarInfo();
var FordExplorer = new SUV('Ford', 'Explorer', 'V6', 75000, true);
FordExplorer.showCarInfo();
var ToyotaRAV4 = new SUV('Toyota', 'RAV4', '4-cylinder', 60000, false);
ToyotaRAV4.showCarInfo();
var ToyotaCamry = new Sedan('Toyota', 'Camry', '4-cylinder', 35000, 'сірий');
ToyotaCamry.showCarInfo();
var HondaAccord = new Sedan('Honda', 'Accord', 'V6', 38000, 'чорний');
HondaAccord.showCarInfo();
var NissanAltima = new Sedan('Nissan', 'Altima', '4-cylinder', 32000, 'сріблястий');
NissanAltima.showCarInfo();
