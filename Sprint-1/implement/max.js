function findMax(elements) {
    //check if the function is empty, return -Infinity
    if (elements.length == 0) {
        return -Infinity;
    }
    //check if the function has only one element, return that element
    else if (elements.length == 1) {
        return elements[0];
    }
    else {
        const numbersOnly = elements.filter(element => typeof element === 'number');
        return  Math.abs(Math.max(...numbersOnly));

    }

}
module.exports = findMax;
