function sum(elements) {
  return elements.reduce((accumulator, currentValue) => {
    if (typeof currentValue === "number" && Number.isFinite(currentValue)) {
      return accumulator + currentValue;
    }
    return accumulator;
  }, 0);
}   
   
module.exports = sum;

 