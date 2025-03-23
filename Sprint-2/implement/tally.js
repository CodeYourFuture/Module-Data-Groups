function tally(arr) {
  const tallyObj = {}; // created an empty object to store the count of each item in the array.

  if (arr.length === 0) {
    // check if array is empty before proceeding then return an empty object.
    return tallyObj;
    // Output tallObj = {}
    // If the array is empty, return an empty object
  }

  if (!Array.isArray(arr)) {
    // check if the input is not array by implementing the Array.isArray() method. with ! not operator to check if the input is not an array. Otherwise throw an error.
    // Output ('Invalid input')
    throw new Error("Invalid input");
  }
  arr.forEach((element) => {
    // we loop through each element in the array.

    if (tallyObj[element]) {
      tallyObj[element]++; // if the element is already in the object then we increment its count by 1. which also separates the key-value pairs.
    } else {
      tallyObj[element] = 1; // if the element is not multiple in the object then we add it with a count of 1..
    }
  });

  return tallyObj; // output tallyObj = {a: 2, b: 1, c: 1, } {a} a:1
}

module.exports = tally;
