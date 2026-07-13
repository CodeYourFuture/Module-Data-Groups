function tally(arr) {
  let counts = {};
  if (arr.length === 0) {
    return {};
  }
  if (arr !== /^[0-9]A-za-z$/g) {
    throw new Error("Please Enter Valid Input!");
  }

  for (const item of arr) {
    if (!/^[A-Za-z0-9]$/.test(item)) {
      throw new Error("Please Enter Valid Input!");
    }
    if (counts.hasOwnProperty(item)) {
      counts[item] += 1;
    } else {
      counts[item] = 1;
    }
  }
  return counts;
}

module.exports = tally;
