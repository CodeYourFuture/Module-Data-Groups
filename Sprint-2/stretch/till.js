// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

function totalTill(till) {
  let total = 0;

  for (const [coin, quantity] of Object.entries(till)) {
    if(coin == "1p"){
      total += 0.01 * quantity;
    }
    else if(coin == "5p"){
      total += 0.05 * quantity;
    }
    else if(coin == "50p"){
      total += 0.5 * quantity
    }
    else if(coin == "20p"){
      total += 0.2 * quantity
    }
  }

  return "£" + total;
}

const till = {
  "1p": 10,
  "5p": 6,
  "50p": 4,
  "20p": 10,
};
const totalAmount = totalTill(till);
console.log(totalAmount);

module.exports = totalTill;
// a) What is the target output when totalTill is called with the till object
// £NaN

// b) Why do we need to use Object.entries inside the for...of loop in this function?
// to iterate over both the keys and values of a plain object

// c) What does coin * quantity evaluate to inside the for...of loop?
// it is multiplying for example : "5p" * 6 which is incorrect

// d) Write a test for this function to check it works and then fix the implementation of totalTill
