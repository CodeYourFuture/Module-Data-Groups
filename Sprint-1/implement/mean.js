function calculateMean(list) {

for (let i = 0; i < elements.length; i++) {
  if (typeof elements[i] !== "number") {
    throw new Error("findMax requires an array of numbers");
  }
}

  if (list.length==0)
   {
    throw new Error("calculateMean requires a non-empty array")
  }

  

  const intialValue = 0;
  const total = list.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    intialValue
  );

  const mean = total / list.length;
  return mean;
}

module.exports = calculateMean;
