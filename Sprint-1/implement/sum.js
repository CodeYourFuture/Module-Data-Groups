function sum(elements) {
    let counter = 0;
    for (const el of elements) {
        if (typeof el === 'number') {
            counter += el;
        }
    }
    return counter;
}

module.exports = sum;
