function tally(arg) {
  if (!Array.isArray(arg)) {
    throw new Error("Invalid input");
  }

  const count = arg.reduce((accumulator, currentValue) => {
    if (Array.isArray(currentValue)) {
      currentValue.forEach((item) => {
        accumulator[item] = (accumulator[item] || 0) + 1;
      });
    } else {
      accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
    }
    return accumulator;
  }, {});

  return count;
}

module.exports = tally;
