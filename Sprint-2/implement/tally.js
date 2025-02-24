const tally = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error("Invalid input");
  }
  let result = {};
  arr.forEach((element) => {
    result[element] = result[element] ? result[element] + 1 : 1;
  });
  /*for (let i of arr) {
    result[i] = result[i] ? result[i] + 1 : 1;
  }*/
  return result;
};
console.log(tally(["a", "a", "b", "c"]));
module.exports = tally;
