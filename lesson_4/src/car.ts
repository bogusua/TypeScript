import {ICar} from "./interface";

abstract class Car implements ICar {
    public type: string;
    public brand: string;
    public model: string;
    public engine: string;
    protected price: number;
    private addPrice: number = 100;

    protected constructor(type: string, brand: string, model: string, engine: string, price: number) {
        this.type = type;
        this.brand = brand;
        this.model = model;
        this.engine = engine;
        this.price = price + this.addPrice;
    }

    protected showCarInfo(...additionalParams: [string, any][]): void {
        console.log(`Тип: ${this.type}`);
        console.log(`Марка: ${this.brand}`);
        console.log(`Модель: ${this.model}`);
        console.log(`Двигун: ${this.engine}`);
        console.log(`Ціна: ${this.price}`);

        // Виведення додаткових параметрів
        additionalParams.forEach((param) => {
            console.log(param[0] + ': ' + param[1]);
        });
        console.log('========================================')
    }
}

export class SUV extends Car {
    public is4x4: boolean;

    constructor(brand: string, model: string, engine: string, price: number, is4x4: boolean) {
        super('SUV', brand, model, engine, price);
        this.is4x4 = is4x4;
    }

    showCarInfo(): void {
        super.showCarInfo(['Чи є 4х4', this.is4x4]);
    }
}

export class Sedan extends Car {
    public color: string;

    constructor(brand: string, model: string, engine: string, price: number, color: string) {
        super('Sedan', brand, model, engine, price);
        this.color = color;
    }

    showCarInfo(): void {
        super.showCarInfo(['Колір', this.color]);
    }
}

export class SportCar extends Car {
    public topSpeed: number;
    public color: string;

    constructor(brand: string, model: string, engine: string, price: number, topSpeed: number, color: string) {
        super('Sport Car', brand, model, engine, price);
        this.topSpeed = topSpeed;
        this.color = color;
    }

    showCarInfo(): void {
        super.showCarInfo(['Максимальна швидкість', this.topSpeed], ['Колір', this.color]);
    }
}
