function tally(arr) {
  let object = {};
  if (!Array.isArray(arr)) {
    throw new Error("This is not an array");
  } else if (arr.length < 1) {
    return {};
  } else {
    for (let i = 0; i < arr.length; i++) {
      const some_value = arr[i];
      object[some_value] = (object[some_value] || 0) + 1;
    }
    return object;
  }
}

const result = tally([1, 2, 3, 1, 2, 3, 6]);
console.log(result);

module.exports = tally;
