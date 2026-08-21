function sum(elements) {
  const elementsList = elements.filter((element) => {
    return (
      typeof element === "number" &&
      !Number.isNaN(element) &&
      Number.isFinite(element)
    );
  });

  let sum = 0;
  for (let i = 0; i < elementsList.length; i++) {
    sum += elementsList[i];
  }
  return sum;
}
module.exports = sum;
