var iceCreamParams = {
    sizeSmall: 10,
    sizeBig: 25,
    chocolate: 5,
    caramel: 6,
    berries: 10,
    marshmallow: 5
};
function getSizeCost() {
    var size = prompt('You want big or small ice cream?');
    if (!size) {
        throw new Error('Cancelled by user');
    }
    if (size !== 'small' && size !== 'big') {
        alert("We don't have that kind of ice cream!");
        throw new Error('Invalid ice cream size');
    }
    return size == 'small' ? iceCreamParams.sizeSmall : iceCreamParams.sizeBig;
}
function getAdds(adds) {
    var isAdd = confirm("Add ".concat(adds, " to ice cream?"));
    return isAdd ? iceCreamParams[adds] : 0;
}
function calculateIceCreamCost(iceCream, isAddChocolate, isAddCaramel, isAddBerries, isAddMarshmallow) {
    return iceCream + isAddChocolate + isAddCaramel + isAddBerries + isAddMarshmallow;
}
function makeIceCream() {
    var size = getSizeCost();
    var isAddChocolate = getAdds('chocolate');
    var isAddCaramel = getAdds('caramel');
    var isAddBerries = getAdds('berries');
    var isAddMarshmallow = getAdds('marshmallow');
    var result = calculateIceCreamCost(size, isAddChocolate, isAddCaramel, isAddBerries, isAddMarshmallow);
    alert("Your Ice Cream cost is ".concat(result, " uah."));
}
