function sum(elements) {
    const filtered = elements.filter(elements =>  typeof elements === "number" && !isNaN(elements) );
    if (filtered.length === 0) {
        return 0;
    }else {
        const sumTotal = filtered.reduce((total, elements) => total + elements, 0);
        return sumTotal;
    }
}

module.exports = sum;
