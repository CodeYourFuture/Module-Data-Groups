// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

function totalTill(till) {
  if (till === 0) {
    return "0.00";
  } else if (typeof till !== "object" || till === null || Array.isArray(till)) {
    throw new Error("The input is not a valid object");
  } else {
    let total = 0;
    for (let [coin, quantity] of Object.entries(till)) {
      //transform till object into an array and
      // looping trough coin as a key and quantity as value

      if (coin.endsWith("p")) {
        coin = Number(coin.slice(0, -1)); // rid of "p" at the end of coin
      } else if (coin.startsWith("£")) {
        coin = Number(coin.slice(1)) * 100; // rid of "£" at the start of coin and transform pound to coin
        // by multiple by 100
      } else {
        throw new Error("Invalid coin format");
      }

      if (isNaN(coin)) {
        throw new Error("Invalid coin format");
      }
      total += coin * quantity; // calculate total
    }
    return `£${(total / 100).toFixed(2)}`; // transform pence into pounds and round total to two decimal places
  }
}

const till = {
  "1p": 10,
  "5p": 6,
  "50p": 4,
  "20p": 0,
};

const totalAmount = totalTill(till);
console.log(totalAmount);

// a) What is the target output when totalTill is called with the till object
//A total amount in pounds: e.g. £2.40, represented by pounds and coins with two decimal places.

// b) Why do we need to use Object.entries inside the for...of loop in this function?
// We need to use the Object.entries to transform the object into an array to get the ability
// to pull keys and values at the same time from the till object to calculate the total.
// e.g. 1p and 10

// c) What does coin * quantity evaluate to inside the for...of loop?
// The coin and quantity evaluate to inside the for...of loop, the total pounds in pence
// according to the type of coin in each array inside the Object.entries(till) array.

// d) Write a test for this function to check it works and then fix the implementation of totalTill

module.exports = totalTill;
