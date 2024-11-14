// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

function totalTill(till) {
  let total = 0;

  for (const [coin, quantity] of Object.entries(till)) {
    // Extract numeric value from the coin (remove "p" and convert to a number)
    const coinValue = parseInt(coin, 10);
    total += coinValue * quantity;
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
console.log(totalAmount); // Expected output: "£4.40"


// a) What is the target output when totalTill is called with the till object
//£4.40"

// b) Why do we need to use Object.entries inside the for...of loop in this function?
//Object.entries(till) converts the till object into an array of key-value pairs (tuples). Each entry in the object (such as "1p": 10) 
//becomes a tuple like ["1p", 10], where the first element is the coin type (the key) and the second element is the quantity (the value).
//In the for...of loop, we need to access both the coin type and the quantity, which is why we use Object.entries(). 
//This allows us to destructure each entry into coin (the coin type) and quantity (the amount of that coin).

// c) What does coin * quantity evaluate to inside the for...of loop?
//Inside the loop, coin * quantity is attempting to multiply a string (coin, like "1p") by a number (quantity, like 10). 
//This will result in an error because multiplying a string by a number doesn't make sense in JavaScript, and will not produce the intended result.

// d) Write a test for this function to check it works and then fix the implementation of totalTill
