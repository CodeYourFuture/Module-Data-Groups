function dedupe(list) {
    const unique = [...new Set(list)];
    return unique;
}

// console.log(dedupe(['apple', 'banana', 'apple', 1, 2, 1])); 




module.exports = dedupe;