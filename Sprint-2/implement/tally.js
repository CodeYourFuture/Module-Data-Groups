function tally(arr) {
  if (!Array.isArray(arr)) {
    //validate that the input is in fact an array in teh first place
    throw new TypeError("Input must be a valid array");
  }
  const obj = {};
  if (arr.length === 0) {
    //return an empty object for an empty array
    return obj;
  }
  for (const item of arr) {
    obj[item] = (obj[item] || 0) + 1; // start at 0 and check each item in the array and count the frequency of each item

    /* 
    initially the obj[item] is undefined because it is empty. A common javascript pattern is to set the assigned value to 0 (hence (... || 0)) if it is undefined (i.e. falsy), this ensures you always have a number to add "1" to.
    In the first iteration, the value of the item in the object is checked and set to 1.  On subsequent iterations, if the value appears again, it will add 1 to the count. If a new item value is found, it will be set to 1, and so on.
    */
  }
  return obj;
}

module.exports = tally;
