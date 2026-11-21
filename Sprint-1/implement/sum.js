function sum(elements) {

  
if (
  !Array.isArray(elements) ||
  elements.some((element) => typeof element !== "number")
) {
  throw new Error("sum requires an array of numbers");
}
    

    const intialValue = 0;
    const total = elements.reduce((accumulator, currentValue) => accumulator + currentValue, intialValue,);

    return total;
    
}

module.exports = sum;
