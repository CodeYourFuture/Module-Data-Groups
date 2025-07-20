function tally(arr) {
    if (!Array.isArray(arr)) {
      throw new Error("Argument must be an array");
    }
  let tally = {};

  if (arr.length === 0) {
    return tally;
  }
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    if (!tally[current]) {
      tally[current] = 0;
    }
    tally[current]++;
  }
  return tally;
}

console.log(tally(["a", "a", "a"]));

module.exports = tally;
