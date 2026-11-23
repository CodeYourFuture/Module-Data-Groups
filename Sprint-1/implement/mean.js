function calculateMean(list) {

if (
  !Array.isArray(list) ||
  list.some((element) => typeof element !== "number")
) {
  throw new Error("calculateMean requires an array of numbers");
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
