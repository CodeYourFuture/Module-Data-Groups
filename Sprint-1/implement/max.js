function findMax(elements) {  
    let numberOnly = elements.filter(item => typeof item === "number");
    // let nonNumber = elements.filter(item => typeof item !== "number");
    if (elements.length === 0) return -Infinity;
    else if (elements.length === 1 && elements[0] > 0) return elements[0];
    // else if (typeof elements !== "number") return NaN
    else if (elements.every(item => typeof item !== "number")) return NaN;
    else return Math.max(...numberOnly);
  };


module.exports = findMax;

console.log(findMax([]));
console.log(findMax([10]));
console.log(findMax([1, -5, 9, -10]));
console.log(findMax([-1, -3, -2]));
console.log(findMax([0.7, 1.2, 9.8, -11.3]));
console.log(findMax(["Apple", true, 10, 98]));
console.log(findMax([true, "Apple", false, "Banana"]));