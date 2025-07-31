function findMax(elements) {
    const numElements = elements.filter(item => typeof item === "number" && !isNaN(item))
    const strElements = elements.filter(item => typeof item === "string")

    if (strElements.length === 0){
        const maxElement = Math.max(...elements);
        return maxElement;
    }
    else if (strElements.length !== 0 && numElements.length !== 0){
        const maxElement = Math.max(...numElements);
        return maxElement;
    }
    else if (strElements.length !== 0 && numElements.length === 0){
        const maxElement = strElements.sort()[elements.length-1];
        return maxElement
    }
}
module.exports = findMax;
