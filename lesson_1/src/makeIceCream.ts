// Визначаємо всі ціни морозива та начинок
const iceCreamParams = {
    sizeSmall: 10,
    sizeBig: 25,
    chocolate: 5,
    caramel: 6,
    berries: 10,
    marshmallow: 5
};

// Визначаємо розмір морозива із замовлення
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

// Запитуємо про начинку до морозива
function getAdds(adds: keyof typeof iceCreamParams): number {
    let isAdd = confirm(`Add ${adds} to ice cream?`);
    return isAdd ? iceCreamParams[adds]: 0;
}

// Підраховуємо вартість морозива
function calculateIceCreamCost(iceCream: number, isAddChocolate: number, isAddCaramel: number, isAddBerries: number, isAddMarshmallow: number): number {
    return iceCream + isAddChocolate + isAddCaramel + isAddBerries +isAddMarshmallow;
}

// Робимо морозиво для покупця =)
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
