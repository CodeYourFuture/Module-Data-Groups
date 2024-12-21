function tally(tallyArray) {
  const valueObject = {};
  const avoidMutateArray = tallyArray.sort();
  for (let i = 0; i < avoidMutateArray.length; i++) {
    if (typeof avoidMutateArray[i] !== "string") {
      throw new Error("Please make it string value");
    }
    if (valueObject[avoidMutateArray[i]]) {
      valueObject[avoidMutateArray[i]] += 1;
    } else {
      valueObject[avoidMutateArray[i]] = 1;
    }
  }
  return valueObject;
}
console.log(tally(["a", "a", "b", "c", "a", "abcd"]));
module.exports = tally;
