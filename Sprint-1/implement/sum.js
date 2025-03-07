function sum(elements) {
    const numbers = elements.filter(num => typeof num === 'number'); 
    return numbers.length > 0 ? numbers.reduce((acc, num) => acc + num, 0) : 0; 
}

console.log(sum([30, 50, 10, 40]));
console.log(sum(['hey', 10, 'hi', 60, 10]));
console.log(sum(['z', -10, 'hi', 60, 10]));

module.exports = sum;
