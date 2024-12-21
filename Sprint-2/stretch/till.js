// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

function totalTill(till) {
  let total = 0;

  for (const [coin, quantity] of Object.entries(till)) {

    let coinValue;

    if(coin.endsWith("p")){
      coinValue = parseInt(coin.replace('p', ""), 10);

    } else if (coin.startsWith("£")){
      throw new Error("Invalid coin format");
    }

    
    total += coinValue * quantity;
  }

  return `£${(total / 100).toFixed(2)}`;
}

const till = {
  "1p": 10,
  "5p": 6,
  "50p": 4,
  "20p": 10, };

module.exports = totalTill;

const totalAmount = totalTill(till);
console.log(totalAmount);

// a) What is the target output when totalTill is called with the till object

// The target output should be £4.40

// b) Why do we need to use Object.entries inside the for...of loop in this function?

// So we can iterate over the key-value pairs of the object

// c) What does coin * quantity evaluate to inside the for...of loop?

// coin * quantity evaluates to the product of the numeric value of the coin (in pence) and its corresponding quantity (number of coins) in the till object.

// d) Write a test for this function to check it works and then fix the implementation of totalTill
