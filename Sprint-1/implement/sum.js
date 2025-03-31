function sum(elements) {
    if (!Array.isArray(elements) || elements.length === 0) {
        return 0; 
    }

    return elements
        .filter(value => typeof value === 'number' && !isNaN(value))
        .reduce((acc, curr) => acc + curr, 0);
}
  



module.exports = sum;
