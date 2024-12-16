function sum(elements) {
    return elements.reduce((total, current) => {
        // Only add if it's a number (not just convertible to a number)
        return total + (typeof current === 'number' ? current : 0);
    }, 0);
}

module.exports = sum;
