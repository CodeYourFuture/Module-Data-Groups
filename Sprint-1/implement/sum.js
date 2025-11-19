function sum(elements) {
  return elements.reduce((accumulator, currentValue) => {
    if (typeof currentValue === "number") {
      return accumulator + currentValue;
    }
    return accumulator;
  }, 0);
}   
   
module.exports = sum;

 