// Write a function that returns true if I can eat the ice cream
//  The function has 1 parameter representing an ice cream object
//  I can eat the ice cream if it is lactose-free and contains less than 10 grams of sugar

function canEat(iceCream) {
      return (
        iceCream.lactoseFree === true && iceCream.gramsOfSugarPerScoop < 10
      );
}

const iceCream1 = {
  flavour: "Vanilla",
  lactoseFree: false,
  gramsOfSugarPerScoop: 12,
};

const iceCream2 = {
  flavour: "Mango Sorbet",
  lactoseFree: true,
  gramsOfSugarPerScoop: 10,
};

const iceCream3 = {
  flavour: "Coconut",
  lactoseFree: true,
  gramsOfSugarPerScoop: 8,
};

const iceCream4 = {
  flavour: "Strawberry",
  lactoseFree: false,
  gramsOfSugarPerScoop: 8,
};

const iceCream5 = {
  flavour: "Lemon Sorbet",
  lactoseFree: true,
  gramsOfSugarPerScoop: 7,
};

console.log(canEat(iceCream1)); // what should this output?
console.log(canEat(iceCream2)); // what should this output?
console.log(canEat(iceCream3)); // what should this output?
console.log(canEat(iceCream4)); // what should this output?
console.log(canEat(iceCream5)); // what should this output?
