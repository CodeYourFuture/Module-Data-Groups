function tally() {}
const tally = require("./tally.js");// Given a function called tally, when passed an array of items, then it should return an object containing the count for each unique item  

// Given an empty array, when passed to tally, then it should return an empty object

for (let i = 0; i < 10; i++) {// Given an array with duplicate items, when passed to tally, then it should return counts for each unique item
  
    const input = Array.from({ length: Math.floor(Math.random() * 20) + 1 }, () => Math.floor(Math.random() * 10));// Generate a random array of numbers between 0 and 9, with a random length between 1 and 20
    const result = tally(input);// Call the tally function with the generated input array
    const expected = input.reduce((acc, val) => {// Use reduce to create an object that counts the occurrences of each unique item in the input array
      acc[val] = (acc[val] || 0) + 1;// For each value in the input array, increment the count for that value in the accumulator object. If the value does not exist in the accumulator, initialize it to 0 before incrementing.
      return acc;
    }, {});
  
  };

module.exports = tally;
