function tally(arr) {
  let count = {};
  for (let letters of arr) {
    if (count[letters]) {
      count[letters]++;
    } else {
      count[letters] = 1;
    }
  }

  console.log(arr);
  return count;
}

console.log(tally(["a", "a", "b", "c"]));
module.exports = tally;
