function dedupe(elements) {
    const unique = [];

    for (let i = 0; i < elements.length; i++) {
        const current = elements[i];

        if (!unique.includes(current)) {
            unique.push(current); 
        }
    }

    return unique;
}

module.exports = dedupe;
