function tally(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Input should be an array");
  }
  const obj = {};
  if (arr.length === 0) {
    return obj;
  }
  arr.forEach((item) => {
    if (obj[item]) {
      obj[item]++;
    } else {
      obj[item] = 1;
    }
  });
  return obj;
}

module.exports = tally;
