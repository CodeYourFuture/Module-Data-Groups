function dedupe(array) {
    const newDedupe = [...new Set(array)];   
    return newDedupe;
}

module.exports = dedupe;

// console.log(dedupe(['a','a','a','b','b','c']));
// console.log(dedupe(['a','a','a','b','b','c']));
// console.log(dedupe([]));