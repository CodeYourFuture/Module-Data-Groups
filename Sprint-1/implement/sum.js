function sum(elements) {
        let total = 0;
    for (let item of elements) {
        if (typeof item === 'number' && !isNaN(item)) {
            total += item; 
        }
    if (total === Infinity || total === -Infinity) {
        return NaN;
    }
}
    return total;

}

module.exports = sum;
