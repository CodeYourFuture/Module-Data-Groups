function findMax(elements) {
    if (elements.length === 0){
        return -Infinity;
    }

    let max = elements[0];

    for (element of elements){
        if (typeof element != "number"){
            throw new Error("findMax requires an array of numbers");
        }
        if (element > max){
            max = element;
        }
    }

    return max;
}

module.exports = findMax;
