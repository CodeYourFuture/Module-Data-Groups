function findMax(elements) {
 elements = elements.filter(element => typeof element === 'number');
      if (elements.length === 0){
    return -Infinity;
   }
  return Math.max(...elements);
}
module.exports = findMax;
