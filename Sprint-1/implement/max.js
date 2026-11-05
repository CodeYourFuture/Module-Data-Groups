function findMax(elements) {
  const arrLength = elements.length;
  if (arrLength === 0) {
    return [-Infinity];
  }
  if (arrLength === 1) {
    return elements[0];
  }
}
//console.log(findMax([5]));
module.exports = findMax;
