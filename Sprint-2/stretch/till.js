// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

function totalTill(till) {
  let total = 0;

  for (const [coin, quantity] of Object.entries(till)) {
    total += coin * quantity;
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

// a) What is the target output when totalTill is called with the till object/* the target output is (1p*10 + 5p*6 +50p*4 +20p*10) =440/100 = £4.40*/

// b) Why do we need to use Object.entries inside the for...of loop in this function?// we use Object.entries to convert Object into an arrays of array to enable iteration as javaScript object is not iterable*/

// c) What does coin * quantity evaluate to inside the for...of loop?/* The expression coin * quantity evaluated to NaN ,as Object.entries  converted the object properties to string and after looping through ,  when the name Variable which is a string multiples a number they will concatenate to form NaN*/

// d) Write a test for this function to check it works and then fix the implementation of totalTill
