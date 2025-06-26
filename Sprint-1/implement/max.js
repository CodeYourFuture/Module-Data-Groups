function findMax(elements) {
    const omnlyNumbers=elements.filter(item=>typeof item==="number").sort((a,b)=>a-b);
    const largestNumber=omnlyNumbers.splice(omnlyNumbers.length-1)[0];
    return largestNumber;
}
console.log(findMax([9,4,"r"]))

module.exports = findMax;
