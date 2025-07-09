function tally(items) {
  if (!Array.isArray(items)) {
    throw new Error("Input should be an array");
  }

  const result = {};

  for (const item of items) {
    if (result[item]) {
      result[item]++;
    } else {
      result[item] = 1;
    }
  }

  return result;
}
module.exports = tally;
//takes and array of items
//item are keys
// how many times that item is repeated in the array- count of that item(key) is the value of each key 