function sum(elements) {

  return elements
  .filter(x => String(x).replace("-", "").replace(".", "").match(/^\d+$/))
  .reduce((sum, x) => sum + x, 0);
  
}

module.exports = sum;
