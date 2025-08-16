function sum(elements) {
  if (!Array.isArray(elements)) 
    return 0;

  return elements
    .filter(item => typeof item === "number")
    .reduce((total, num) => total + num, 0);
}

module.exports = sum;