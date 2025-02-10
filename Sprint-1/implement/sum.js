function sum(elements) {
    total = 0;
    for (const el of elements) {
        if (typeof el === "number" && el !== NaN) {
            total += el;
        }
    }
    return total;
}

module.exports = sum;
