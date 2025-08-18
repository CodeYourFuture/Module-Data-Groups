function tally(arrayOfItems) {
  if (!Array.isArray(arrayOfItems)) {
    throw new TypeError("parameter must be an array");
  }
  let result = {};
  arrayOfItems.forEach((element) => {
    if (element in result) {
      result[element] += 1;
    } else {
      result[element] = 1;
    }
  });
  return result;
}
console.log(tally([]));

module.exports = tally;
