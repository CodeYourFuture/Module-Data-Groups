function findMax(elements) {
    //excludes all non-numbers and sorts the array in ascending order
    const omnlyNumbers=elements.filter(item=>typeof item==="number").sort((a,b)=>a-b);
    //it retrieves the last element of the array
    const largestNumber=omnlyNumbers.splice(omnlyNumbers.length-1)[0];
    return largestNumber;
}
console.log(findMax([9,4,"r"]))

module.exports = findMax;
