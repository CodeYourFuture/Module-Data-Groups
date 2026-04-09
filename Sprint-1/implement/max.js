function findMax(elements){
  if(elements.length === 0) return elements;
 
  let filteredArray = elements.filter(item => typeof item === "number" && !isNaN(item))
  if (filteredArray.length === 0) return null;
  let sortedArray = filteredArray.sort((a,b) => a-b );
  let maxArrayValue = sortedArray[sortedArray.length -1];
  return maxArrayValue;
}

module.exports = findMax;
