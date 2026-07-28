function tally(items) {
  const result = {};
  for (const item of items) {
    result[item] = (result[item] || 0) + 1;
  }
  return result;
}
console.log(tally(["a", "b", "a", "c"]));
console.log(tally([])); // {}
console.log(tally("never mind"));
module.exports = tally;
