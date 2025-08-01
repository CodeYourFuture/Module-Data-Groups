//write a function to only check for duplicates
function hasDuplicates(arr) {
  return arr.some((item, index) => arr.indexOf(item) !== index);
}
function dedupe(elements) {
  if (!Array.isArray(elements)) return null;
  const lengthOfArray = elements.length;
  if (lengthOfArray === 0) return [];
  if (hasDuplicates(elements)) {
    return elements.filter((item, index) => elements.indexOf(item) == index);
  } else return elements;
}
module.exports = dedupe;
