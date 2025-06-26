function findMax(elements) {
    //if element is empty returns infinity
    if(elements.length===0) return-Infinity;
    //if the array has only one number it returns the number
    if(elements=>typeof elements==="number"&& elements.length===1) return elements[0]
    //excludes all non-numbers and sorts the array in ascending order
    const omnlyNumbers=elements.filter(item=>typeof item==="number").sort((a,b)=>a-b);
    
    //it retrieves the last element of the array
    const largestNumber=omnlyNumbers.splice(omnlyNumbers.length-1)[0];
    return largestNumber;
}
console.log(findMax([9,4,-106]))

module.exports = findMax;
