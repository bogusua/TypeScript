/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/car.ts":
/*!********************!*\
  !*** ./src/car.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SportCar = exports.Sedan = exports.SUV = void 0;
class Car {
    constructor(type, brand, model, engine, price) {
        this.addPrice = 100;
        this.type = type;
        this.brand = brand;
        this.model = model;
        this.engine = engine;
        this.price = price + this.addPrice;
    }
    showCarInfo(...additionalParams) {
        console.log(`Тип: ${this.type}`);
        console.log(`Марка: ${this.brand}`);
        console.log(`Модель: ${this.model}`);
        console.log(`Двигун: ${this.engine}`);
        console.log(`Ціна: ${this.price}`);
        additionalParams.forEach((param) => {
            console.log(param[0] + ': ' + param[1]);
        });
        console.log('========================================');
    }
}
class SUV extends Car {
    constructor(brand, model, engine, price, is4x4) {
        super('SUV', brand, model, engine, price);
        this.is4x4 = is4x4;
    }
    showCarInfo() {
        super.showCarInfo(['Чи є 4х4', this.is4x4]);
    }
}
exports.SUV = SUV;
class Sedan extends Car {
    constructor(brand, model, engine, price, color) {
        super('Sedan', brand, model, engine, price);
        this.color = color;
    }
    showCarInfo() {
        super.showCarInfo(['Колір', this.color]);
    }
}
exports.Sedan = Sedan;
class SportCar extends Car {
    constructor(brand, model, engine, price, topSpeed, color) {
        super('Sport Car', brand, model, engine, price);
        this.topSpeed = topSpeed;
        this.color = color;
    }
    showCarInfo() {
        super.showCarInfo(['Максимальна швидкість', this.topSpeed], ['Колір', this.color]);
    }
}
exports.SportCar = SportCar;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const car_1 = __webpack_require__(/*! ./car */ "./src/car.ts");
const Ferrari488 = new car_1.SportCar('Ferrari', '488 GTB', 'V8', 200000, 330, 'червоний');
Ferrari488.showCarInfo();
const LamborghiniHuracan = new car_1.SportCar('Lamborghini', 'Huracan', 'V10', 250000, 325, 'жовтий');
LamborghiniHuracan.showCarInfo();
const Porsche911 = new car_1.SportCar('Porsche', '911', 'Flat-6', 180000, 310, 'синій');
Porsche911.showCarInfo();
const JeepCherokee = new car_1.SUV('Jeep', 'Grand Cherokee', 'V6', 80000, true);
JeepCherokee.showCarInfo();
const FordExplorer = new car_1.SUV('Ford', 'Explorer', 'V6', 75000, true);
FordExplorer.showCarInfo();
const ToyotaRAV4 = new car_1.SUV('Toyota', 'RAV4', '4-cylinder', 60000, false);
ToyotaRAV4.showCarInfo();
const ToyotaCamry = new car_1.Sedan('Toyota', 'Camry', '4-cylinder', 35000, 'сірий');
ToyotaCamry.showCarInfo();
const HondaAccord = new car_1.Sedan('Honda', 'Accord', 'V6', 38000, 'чорний');
HondaAccord.showCarInfo();
const NissanAltima = new car_1.Sedan('Nissan', 'Altima', '4-cylinder', 32000, 'сріблястий');
NissanAltima.showCarInfo();

})();

/******/ })()
;
//# sourceMappingURL=main.js.map