//I will do for loop to iterate every element
//I have to use that filters number only the array to number
//check every index is whether greater than the next index
function findMax(elements) {
    let smallestNumber = -Infinity;
    for(let index=0; index < elements.length; index++){
        const currentNumber = elements[index];
        if (!isNaN(currentNumber) && currentNumber > smallestNumber){
          smallestNumber = currentNumber ;
    }
  
}
 return smallestNumber;
}

console.log(findMax([2,4,7,12,6,0,28]));

module.exports = findMax;
