function tally(list) {
  var counts = {};
  if (!Array.isArray(list)) {
    throw new Error("Input must be an array");
  }

  for (var item of list) {
    if (counts[item]) {
      counts[item] += 1;
    } else {
      counts[item] = 1;
    }
  }

  return counts;
}

console.log(tally(["a", "a", "c", "a", "d"]));
module.exports = tally;
