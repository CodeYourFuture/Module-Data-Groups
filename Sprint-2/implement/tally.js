function tally(argument) {
  if (!Array.isArray(argument)) {
    throw new Error("Invalid input");
  }

  const flatArray = argument.flat();

  if (flatArray.length === 0) {
    return {};
  }

  const count = flatArray.reduce((accumulator, currentValue) => {
    if (!accumulator[currentValue]) {
      accumulator[currentValue] = 1; 
    } else {
      accumulator[currentValue]++; 
    }
    return accumulator;
  }, {});

  return count; 
}

module.exports = tally;
