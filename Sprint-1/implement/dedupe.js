function dedupe(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Input Parameter has to be Array");
  }
  const removeDuplicate = [...new Set(arr)];
  return removeDuplicate;
}
module.exports = dedupe;
