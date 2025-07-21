function tally(arr) {
  const result = Object.create(null); // Prevent prototype pollution (e.g., "toString")
  for (const item of arr) {
    if (result[item]) {
      result[item]++;
    } else {
      result[item] = 1;
    }
  }
  return result;
}

module.exports = tally;


