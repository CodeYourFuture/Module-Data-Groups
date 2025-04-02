//Write a function that returns true if I can eat the ice cream
//the function has one parameter representing an ice cream object
// I can eat ice cream if it is lactose-free and contains less than 10 grams of sugar

function canEatIceCream(iceCream) {
    if (typeof iceCream !== "object" || iceCream === null) {
        return false;
    }
    return iceCream.lactoseFree && iceCream.sugar < 10;
}

module.exports = canEatIceCream;
