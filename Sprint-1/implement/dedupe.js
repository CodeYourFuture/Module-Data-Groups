function dedupe(array) {
    const unique = [];
    array.forEach((item) => {
        if (!unique.includes(item)) {
            unique.push(item);
        }
    });
    return unique
}

module.exports = dedupe;