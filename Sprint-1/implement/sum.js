function sum(arr) {
    return arr.reduce((acc, curr) => {
        if (typeof curr === 'number') {
            return acc + curr;
        }
        return acc;
    }, 0);
}

module.exports = sum;
