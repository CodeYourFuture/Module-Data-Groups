function tally(items) {
if (!Array.isArray(items)) {
    throw new Error("Input must be an array");
  }

  const count = {};

  
  for (const item of items) {
    if (count[item]) {
      count[item]++;
    } else {
      count[item] = 1;
    }
  }

  return count;
}



module.exports = tally;
