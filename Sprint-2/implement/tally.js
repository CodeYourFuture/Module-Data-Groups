function tally(list) {
  if (Array.isArray(list)) {
    return list.reduce((acc, currentValue) => {
      acc[currentValue] = (acc[currentValue] || 0) + 1;
      return acc;
    }, {});
  }
  else {
    throw new Error ('Invalid input, please enter an array.')
  }
  
}

module.exports = tally;
