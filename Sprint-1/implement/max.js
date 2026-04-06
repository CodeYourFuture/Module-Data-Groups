function findMax(elements){
  let sortedArray = elements.sort((a,b) => a-b );
  let maxArrayValue = sortedArray[sortedArray.length -1]
  return maxArrayValue;
}

module.exports = findMax;
console.log(findMax([30, 50, 10, 40]));