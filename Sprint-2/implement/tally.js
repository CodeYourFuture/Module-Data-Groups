function tally(inputArray) {
  if (!Array.isArray(inputArray)) {
    throw new Error("Input must be an array");
  }

  const result = {};

  for (const element of inputArray) {
    if (result[element]) {
      result[element] += 1;
    } else {
      result[element] = 1;
    }
  }
  return result;
}
console.log(tally(["a", "b", "a", "c"])); // { a: 2, b: 1, c: 1 }
module.exports = tally;
