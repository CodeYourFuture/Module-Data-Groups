function sum(elements) {
    const numbers = elements.filter(num => typeof num === 'number'); 
    const total = numbers.length > 0 ? numbers.reduce((acc, num) => acc + num, 0) : 0;
    //return numbers.length > 0 ? numbers.reduce((acc, num) => acc + num, 0) : 0; 
    return parseFloat(total.toFixed(2));
}

console.log(sum([30, 50, 10, 40]));
console.log(sum(['hey', 10, 'hi', 60, 10]));
console.log(sum(['z', -10, 'hi', 60, 10]));

module.exports = sum;
