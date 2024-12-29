  // totalTill takes an object representing coins in a till

  // Given an object of coins
  // When this till object is passed to totalTill
  // Then it should return the total amount in pounds

  function totalTill(till) {
    let total = 0;

    for (const [coin, quantity] of Object.entries(till)) {
      total += +coin.replace("p", "") * quantity;
    }

    return `£${(total / 100).toFixed(2)}`;
  }

  const till = {
    "1p": 10,
    "5p": 6,
    "50p": 4,
    "20p": 10,
  };
const totalAmount = totalTill(till);

// a) What is the target output when totalTill is called with the till object
  
/* The target output of totalTill(till) is the total value of coins in pounds, properly formatted. */

  // b) Why do we need to use Object.entries inside the for...of loop in this function?

/* The Object.entries() method is necessary because it converts the object into an array of key-value pairs, which can then be iterated with for...of */
  
// c) What does coin * quantity evaluate to inside the for...of loop?
  
/* Inside the loop, coin * quantity multiplies the key (e.g., "1p") with the quantity. */

  // d) Write a test for this function to check it works and then fix the implementation of totalTill

/* assert.strictEqual(totalTill({ "1p": 5, "2p": 10, "10p": 2 }), "£0.35"); */
