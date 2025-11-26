function tally(array) {
  if (!Array.isArray(array)) {
    throw new Error("Input must be an array");
    // check if the input ia an array. if not, throw an error.
  }
  const tally = Object.create(null);

  for (const item of array) {
    tally[item] = (tally[item] || 0) + 1;
    // If the item already exists in tally, increase its count by 1.
    // If it doesn't exist, start from 1.
  }

  return tally;
  
}

console.log(tally(["a", "a", "a"]));
console.log(tally(["toString","toString"]));

module.exports = tally;
