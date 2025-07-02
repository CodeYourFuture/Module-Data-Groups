function sum(elements) { 
    return elements
    .filter(n => typeof n === "number" && !isNaN(n))
    .reduce((total, n) => total + n, 0);
    Infinity 
}

module.exports = sum;
