// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

function totalTill(till) {
  let total = 0;

  for (const [coin, quantity] of Object.entries(till)) {
    const x = coin.slice(0, coin.length - 1) * quantity
    total += x;
  }

  return `£${total / 100}`;
}

const till = {
  "1p": 10, 
  "5p": 6, 
  "50p": 4, 
  "20p": 10, 
};
const totalAmount = totalTill(till);

// a) What is the target output when totalTill is called with the till object
    // is to return the total amounts in pounds which is in this example qual to £4.4

// b) Why do we need to use Object.entries inside the for...of loop in this function?
    // to get each key-value pair alone and assign key to be = coin and value = quantity

// c) What does coin * quantity evaluate to inside the for...of loop?
    //  multiplication of the key by the value

// d) Write a test for this function to check it works and then fix the implementation of totalTill
const input = totalTill({"1p": 10})
const targetOutput = "£0.1"
console.assert(input === targetOutput, "It should return £0.1")
