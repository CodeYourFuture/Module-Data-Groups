function findMax(elements) {
  
    const filteredList = elements.filter(
      (value) => typeof value === "number" && !Number.isNaN(value)
    );
    return Math.max(...filteredList);
  
}

module.exports = findMax;