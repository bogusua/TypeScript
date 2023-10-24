/**
 * @const
 * Прайс інгрідієнтів морозива
 */
const iceCreamParams = {
    sizeSmall: 10,
    sizeBig: 25,
    chocolate: 5,
    caramel: 6,
    berries: 10,
    marshmallow: 5
};

/**
 * Метод запитує користувача про бажаний розмір морозива і повертає вартість обраної порції
 * @return Вартість морозива
 */
function getSizeCost(): number {
    let size: string = prompt('You want big or small ice cream?');
    if (!size) {
        throw new Error('Cancelled by user');
    }
    if (size !== 'small' && size !== 'big') {
        alert("We don't have that kind of ice cream!");
        throw new Error('Invalid ice cream size');
    }

    return size == 'small' ? iceCreamParams.sizeSmall: iceCreamParams.sizeBig;
}

/**
 * Метод запитує користувача про будь яку добавку що зазначена у iceCreamParams і повертає вартість добавки
 * @param adds Визначеється як властивість з об'єкту iceCreamParams
 * @return Вартість добавки
 */
function getAdds(adds: keyof typeof iceCreamParams): number {
    let isAdd = confirm(`Add ${adds} to ice cream?`);
    return isAdd ? iceCreamParams[adds]: 0;
}

/**
 * Метод підсумовує вартість всіх інгридієнтів морозива і повертає загальну вартість
 * @param iceCream {number} Вартість самого морозива
 * @param isAddChocolate {number} Вартість добавки шоколад
 * @param isAddCaramel {number} Вартість добавки карамель
 * @param isAddBerries {number} Вартість добавки ягоди
 * @param isAddMarshmallow {number} Вартість добавки маршмеллоу
 * @return Загальна вартість морозива з добавками
 */
function calculateIceCreamCost(iceCream: number, isAddChocolate: number, isAddCaramel: number, isAddBerries: number, isAddMarshmallow: number): number {
    return iceCream + isAddChocolate + isAddCaramel + isAddBerries +isAddMarshmallow;
}

/**
 * Метод запускає процес опитування користувача і підрахунок вартості морозива
 */
function makeIceCream(): void {
    const size = getSizeCost();
    const isAddChocolate =  getAdds('chocolate');
    const isAddCaramel =  getAdds('caramel');
    const isAddBerries =  getAdds('berries');
    const isAddMarshmallow =  getAdds('marshmallow');

    const result = calculateIceCreamCost(size, isAddChocolate, isAddCaramel, isAddBerries, isAddMarshmallow);

    alert(`Your Ice Cream cost is ${result} uah.`);
}


// просто коментар що до завдання №3 у ДЗ - npx tsc --outDir dist --target ES5 --removeComments
