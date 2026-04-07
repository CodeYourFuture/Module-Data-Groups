function findMax(elements){
  if(elements.length === 0) return elements;
  //if (elements.forEach())
  let sortedArray = elements.sort((a,b) => a-b );
  let maxArrayValue = sortedArray[sortedArray.length -1]
  return maxArrayValue;
}

module.exports = findMax;
console.log(findMax([30, 50, 10, 40]));