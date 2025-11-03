function sum(elements) {
    if (!Array.isArray(elements)) return null
    const sumNum = elements.filter(n => typeof n === 'number' && !isNaN(n))
    return sumNum.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

module.exports = sum;
