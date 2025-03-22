function findMax(elements) {
    
    elements.sort((a, b) => a - b);
    return elements.slice(-1);
}

console.log(findMax([30, 50, 10, 40]));
console.log(findMax(['hey', 10, 'hi', 60, 10]));
console.log(findMax(['z', -10, 'hi', 60, 10]));

module.exports = findMax;
