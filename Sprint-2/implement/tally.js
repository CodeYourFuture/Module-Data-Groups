function tally(inputArray) {
  if (!Array.isArray(inputArray)) {
    throw new Error("Input must be an array");
  }

  const result = Object.create(null);

  for (const element of inputArray) {
    if (result[element]) {
      result[element] += 1;
    } else {
      result[element] = 1;
    }
  }
  return result;
}
console.log(tally(["toString", "toString", "toString"]));
module.exports = tally;
