function tally(arr) {
  let result = {};
  for (let i of arr) {
    result[i] = result[i] ? result[i] + 1 : 1;
  }
  return result;
}
console.log(tally(["a", "a", "a"]));
console.log(tally(["a", "a", "b", "c"]));
module.exports = tally;
