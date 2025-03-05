function sum(elements) {
  if (elements.length === 0) return 0;
  else if (elements.every(item => typeof item !== "number")) return NaN;
  else if (elements.length === 1) return elements[0];

  let sumOfElements = 0;
  for (let i = 0; i < elements.length; i++) {
    if (typeof elements[i] === "number") {
    sumOfElements += elements[i];
    }
  }
  return sumOfElements; 
};

module.exports = sum;

console.log(sum([]));
console.log(sum([1]));
console.log(sum([-1, 1, -2, 3]));
console.log(sum([1.1, 2.2, 3, 4.5]));
console.log(sum(['hey', 10, 'hi', 60, 10]));
console.log(sum(['hey', true, 'hi']));


