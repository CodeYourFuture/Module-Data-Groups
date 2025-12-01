function sum(elements) {
  if (!Array.isArray(elements)) return null;

  return elements.reduce((accumulator, n) => {
    return typeof n === 'number' && !isNaN(n) ? accumulator + n : accumulator;
  }, 0);
}

   
module.exports = sum;

 