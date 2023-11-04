class Car {
    public type: string;
    public brand: string;
    public model: string;
    public engine: string;
    protected price: number;
    private addPrice: number = 100;

    constructor(type: string, brand: string, model: string, engine: string, price: number) {
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

class SUV extends Car {
    public is4x4: boolean;

    constructor(brand: string, model: string, engine: string, price: number, is4x4: boolean) {
        super('SUV', brand, model, engine, price);
        this.is4x4 = is4x4;
    }

    showCarInfo(): void {
        super.showCarInfo(['Чи є 4х4', this.is4x4]);
    }
}

class Sedan extends Car {
    public color: string;

    constructor(brand: string, model: string, engine: string, price: number, color: string) {
        super('Sedan', brand, model, engine, price);
        this.color = color;
    }

    showCarInfo(): void {
        super.showCarInfo(['Колір', this.color]);
    }
}

class SportCar extends Car {
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

const Ferrari488 = new SportCar('Ferrari', '488 GTB', 'V8', 200000, 330, 'червоний');
Ferrari488.showCarInfo();
const LamborghiniHuracan = new SportCar('Lamborghini', 'Huracan', 'V10', 250000, 325, 'жовтий');
LamborghiniHuracan.showCarInfo();
const Porsche911 = new SportCar('Porsche', '911', 'Flat-6', 180000, 310, 'синій');
Porsche911.showCarInfo();

const JeepCherokee = new SUV('Jeep', 'Grand Cherokee', 'V6', 80000, true);
JeepCherokee.showCarInfo();
const FordExplorer = new SUV('Ford', 'Explorer', 'V6', 75000, true);
FordExplorer.showCarInfo();
const ToyotaRAV4 = new SUV('Toyota', 'RAV4', '4-cylinder', 60000, false);
ToyotaRAV4.showCarInfo();

const ToyotaCamry = new Sedan('Toyota', 'Camry', '4-cylinder', 35000, 'сірий');
ToyotaCamry.showCarInfo();
const HondaAccord = new Sedan('Honda', 'Accord', 'V6', 38000, 'чорний');
HondaAccord.showCarInfo();
const NissanAltima = new Sedan('Nissan', 'Altima', '4-cylinder', 32000, 'сріблястий');
NissanAltima.showCarInfo();
