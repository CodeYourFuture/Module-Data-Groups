function sum(elements) {
  if (elements.length === 0) {
    return 0;
  }
  if (elements.length === 1) {
    return elements[0];
  }
  if (elements.every((element) => typeof element !== "number")) {
    return NaN;
  }
  const filteredElements = elements.filter(
    (element) => typeof element === "number"
  );
  let addElements = 0;
  for (let element of filteredElements) {
    addElements = addElements + element;
  }

  return addElements;
}
module.exports = sum;
console.log(sum([-9, -3, -4]));
