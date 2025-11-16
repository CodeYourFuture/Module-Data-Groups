function dedupe(array) {
  if (!Array.isArray(array)) throw new Error("Input must be an array");
  return array.filter((item, index) => array.indexOf(item) === index);
}
console.log(dedupe(['a', 'a', 'a', 'b', 'b', 'c']));
module.exports = dedupe;

// Dedupe function implemented. 