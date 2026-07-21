function findMax(elements) {
    if (elements.length === 0){
        return -Infinity;
}
const cleanElements = elements.filter(item => typeof item === "number").sort( (a,b) => (a - b));
    if (cleanElements.length === 0){
        return -Infinity;
    }
    else{
        return cleanElements[cleanElements.length-1]
    }
}
module.exports = findMax;
