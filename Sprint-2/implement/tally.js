function tally(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Invalid input");
  }
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];

    if (obj[item]) {
      obj[item] += 1;
    } else {
      obj[item] = 1;
    }
  }

  return obj;
}
tally(["a", "a", "b"]);
module.exports = tally;
