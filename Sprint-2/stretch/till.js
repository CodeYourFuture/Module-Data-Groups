// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

// function totalTill(till) {
//   let total = 0;

//   for (const [coin, quantity] of Object.entries(till)) {
//     console.log("coin ==>", coin);
//     console.log("quantity %%%%", quantity);
//     total += Number(coin[0] * quantity);
//   }

//   return `£${total / 100}`;
// }

// const till = {
//   "1p": 10,
//   "5p": 6,
//   "50p": 4,
//   "20p": 10,
// };
// const totalAmount = totalTill(till);
// console.log(totalAmount);

// a) What is the target output when totalTill is called with the till object
// the target output is the total amount in string format

// b) Why do we need to use Object.entries inside the for...of loop in this function?
// because Object.entries(till) returns an array with key-value pairs.

// c) What does coin * quantity evaluate to inside the for...of loop?
// it evaluates to NaN

// d) Write a test for this function to check it works and then fix the implementation of totalTill
function totalTill(till) {
  let total = 0;
  if (Object.prototype.toString.call(till) !== "[object Object]") {
    throw new Error("Param must be an object");
  }

  for (const [coin, quantity] of Object.entries(till)) {
    const indexOfP = coin.indexOf("p");
    const numericPartOfCoin = Number(coin.slice(0, indexOfP));
    total += numericPartOfCoin * quantity;
  }

  return `£${total / 100}`;
}

// const till = { "200p": 2, "300p": 2 };
// console.log(totalTill(till));
//console.log(totalAmount);

module.exports = totalTill;
