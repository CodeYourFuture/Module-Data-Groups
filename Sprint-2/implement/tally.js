function tally(arr) {
  let result = {};
  for (let i of arr) {
    if (typeof arr === "object") {
      result[i] = result[i] ? result[i] + 1 : 1;
    }
  }
  return result;
}
console.log(tally(["a", "a", "a"]));
console.log(tally(["a", "a", "b", "c"]));
console.log(tally("hsgdjsgdsgdjs"));
module.exports = tally;
