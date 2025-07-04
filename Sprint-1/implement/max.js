function findMax(elements) {
  if (elements.length === 0) {
    return -Infinity
 }
 let max = -Infinity
 for( let i = 0 ; i < elements.length; i++) {
    const checkElements = elements[i]
    if(typeof checkElements === "number" && Number.isFinite(checkElements)) {
        if(checkElements > max){
            max = checkElements
        }
    }
 }
 return max

}

console.log(findMax([2,5,4,1,8]))
console.log(findMax([2,5,4,8,1,,'b','j']))
console.log(findMax([]))
console.log(findMax([3]))
console.log(findMax([-1,-5,-9-150]))
console.log(findMax([0.1,0.100,0.5]))
console.log(findMax([2,5,-4,4,-1,1,10]))
console.log(findMax(['a','n','/','+']))

module.exports = findMax;
