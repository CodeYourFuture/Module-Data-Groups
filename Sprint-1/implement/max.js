function findMax(elements) {
    if (elements.length===0){
        return -Infinity;
    }
    return Math.max(...elements.filter(Number.isFinite)); //found this method to get true or false for numeric and non numeric values before finding the max numeric value
}

module.exports = findMax;
