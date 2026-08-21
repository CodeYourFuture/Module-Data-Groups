function findMax(elements) {
  if (elements.length === 0) {
    return -Infinity;
  }
  const elementLists = elements.filter((number) => {
    return typeof number === "number";
  });
  if (elementLists.length === 0) {
    return 0;
  }
  if (elementLists.length === 1) {
    return elementLists[0];
  }
  let max = elementLists[0];
  for (let i = 1; i < elementLists.length; i++) {
    if (elementLists[i] > max) {
      max = elementLists[i];
    }
  }
  return max;
}
module.exports = findMax;
