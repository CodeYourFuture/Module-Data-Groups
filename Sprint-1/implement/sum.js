function sum(elements) {
  if (elements.length === 0) {
    return 0;
  }
  const elementsList = elements.filter((element) => {
    return typeof element === "number";
  });
  if (elementsList.length === 1) {
    return elementsList[0];
  }
  let sum = 0;
  for (let i = 0; i < elementsList.length; i++) {
    sum += elementsList[i];
  }
  return sum;
}
module.exports = sum;
