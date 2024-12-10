function dedupe(array) {
    
    return [...new Set(array)];

}

module.exports = dedupe;

console.log(dedupe([5, 1, 1, 2, 3, 2, 5, 8]));
