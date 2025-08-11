function findMax(elements) {
  if (elements.length === 0) {
    return -Infinity;
  }
  
  let max = -Infinity;
  
   for (let i = 0; i < elements.length; i++) {
    const current = elements[i];
    
    if (typeof current === 'number' && !isNaN(current) && current !== null && current > max) {
      max = current;
    }
  }
  
  return max;
}

module.exports = findMax;
