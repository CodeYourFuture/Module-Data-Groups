function findMax(elements) {
  const floats = elements
    .filter(x => {
      const str = String(x);
      return !isNaN(str) && str !== "";
    })
    .map(x => Number(x));

  if (floats.length === 0) {
    return -Infinity;
  } else {
    return Math.max(...floats);
  }
}
  


module.exports = findMax;
