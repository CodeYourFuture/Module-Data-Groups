function findMax(elements) {

  const numberOnly = elements.filter((number)=>typeof number === "number")
  return Math.max(...numberOnly)
}

module.exports = findMax;
