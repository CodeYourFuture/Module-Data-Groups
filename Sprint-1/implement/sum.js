function sum(elements) {
        let total = 0;
    for (let item of elements) {
        if (typeof item === 'number') {
            total += item; 
        }
    }
    return total;

}

module.exports = sum;
