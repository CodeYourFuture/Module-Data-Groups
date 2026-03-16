function tally(arr) {
  check = arr.constructor === Array;
  try {
    if (check !== true) {
      throw new Error("input requires an array");
    }

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
  } catch (e) {
    return e.message;
  }
}

console.log(tally({ 6: 7 }));
module.exports = tally;
