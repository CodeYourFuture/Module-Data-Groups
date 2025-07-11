function findMax(elements) {
  if(elements === 0){
    return -Infinity;
  }else{
    return Math.max(...elements)
  }
}

// console.log(findMax([1, 2, 3, 4,10]));
// console.log(findMax([]));
// console.log(findMax([1]));
module.exports = findMax;
