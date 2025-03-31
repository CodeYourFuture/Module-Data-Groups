//I will do for loop to iterate every element
//I have to use that filters number only the array to number
//check every index is whether greater than the next index
function findMax(elements) {
    if (elements.length === 0) {
        return -Infinity;  
    }

    let maxNumber = -Infinity;
    for (const currentNumber of elements) {
        if (typeof currentNumber === 'number' && !isNaN(currentNumber) && currentNumber > maxNumber) {
            maxNumber = currentNumber;
        }
    }

    return maxNumber 
}


module.exports = findMax;
