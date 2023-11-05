import {Sedan, SportCar, SUV} from "./car";

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