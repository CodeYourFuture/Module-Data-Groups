function findMax(elements) {
    if (elements.length === 0){
        return -Infinity;
    }

    let max = elements[0];

    for (element of elements){
        if (element > max){
            max = element;
        }
    }

    return max;
}

module.exports = findMax;
