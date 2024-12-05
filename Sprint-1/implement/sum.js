function sum(elements) {
    const numericElements = elements.filter(el => typeof el === 'number'); 

    const hasPositiveInfinity = numericElements.includes(Infinity);
    const hasNegativeInfinity = numericElements.includes(-Infinity);
    if (hasPositiveInfinity && hasNegativeInfinity) {
        return NaN;
    }


    const hasNaN = numericElements.some(el => isNaN(el));
    if (hasNaN) {
        return NaN;
    }

    return numericElements.reduce((total, num) => {
        if (num === Infinity || num === -Infinity) return num; 
        return total + num;
    }, 0);
}

module.exports = sum;