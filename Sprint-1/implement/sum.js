function sum(elements) {
  const elementsList = elements.filter((element) => {
    return (
      typeof element === "number" &&
      !Number.isNaN(element) &&
      Number.isFinite(element)
    );
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
