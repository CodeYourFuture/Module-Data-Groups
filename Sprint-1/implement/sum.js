function sum(elements) {
    let sum = 0;
    for (let i = 0; i < elements.length; i += 1) {
        if(typeof elements[i] == "number" && !isNaN(elements[i])) {
            sum += elements[i];
        }
    }
    return Math.round(sum * 1e10) / 1e10;
}

module.exports = sum;
