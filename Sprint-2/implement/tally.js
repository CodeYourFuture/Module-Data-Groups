function tally(array) {
  // ensures that the input is an array.
  if (!Array.isArray(array)) {
    // throw an error if input is not an array
    throw new Error("expected input to be an array");
  }

  // make an empty object to store items counted
  const itemCount = Object.create(null);

  // loop over each item in the array
  for (const item of array) {
    // if the item hasn't been counted yet treat it as 0
    itemCount[item] = (itemCount[item] || 0) + 1; // then adds 1 to either start or increment the count for this item
  }

  return itemCount;
}
console.log(tally(["toString", "toString"]));

module.exports = tally;
