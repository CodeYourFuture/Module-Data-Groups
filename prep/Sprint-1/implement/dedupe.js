function dedupe(arr) {
  let s = new Set(arr); // Create set of unique values using Set constructor
  let a1 = [...s]; // convert the set back to an array

  return a1; // returns the array
}
module.exports = dedupe;
