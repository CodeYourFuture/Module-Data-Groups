function dedupe(n) {
    const unique = [...new Set(n)];
    return unique;
}



module.exports = dedupe;