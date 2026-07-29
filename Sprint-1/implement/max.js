function findMax(elements) {
    // filter out the numeric numbers 
const numbers = elements.filter(
  (item) => typeof item === "number" && !Number.isNaN(item)
);

const maxiNum = Math.max(...numbers);
return maxiNum;

}

module.exports = findMax;
