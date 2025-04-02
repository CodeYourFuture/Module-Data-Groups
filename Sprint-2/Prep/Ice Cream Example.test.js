const canEatIceCream = require("./Ice Cream Example");


//The first test is to check if the function returns true if the ice cream is lactose-free and contains 5 grams of sugar
test("returns true if ice cream is lactose-free and contains less than 10 grams of sugar", () => {
    const iceCream = {
        flavor: "vanilla",
        lactoseFree: true,
        sugar: 5,
    };
    const result = canEatIceCream(iceCream);
    expect(result).toBe(true);
});

//The second test is to check if the function returns false if the ice cream is not lactose-free
test("returns false if ice cream is not lactose-free", () => {
    const iceCream = {
        flavor: "vanilla",
        lactoseFree: false,
        sugar: 5,
    };
    const result = canEatIceCream(iceCream);
    expect(result).toBe(false);
});

//The third test is to check if the function returns false if the ice cream contains more than 10 grams of sugar
test("returns false if ice cream contains more than 10 grams of sugar", () => {
    const iceCream = {
        flavor: "vanilla",
        lactoseFree: true,
        sugar: 15,
    };
    const result = canEatIceCream(iceCream);
    expect(result).toBe(false);
});

//The fourth test is to check if the function returns false if the ice cream is not an object
test("returns false if the ice cream is not an object", () => {
    const iceCream = "vanilla";
    const result = canEatIceCream(iceCream);
    expect(result).toBe(false);
});

