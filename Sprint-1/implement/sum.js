function sum(elements) {
  let sumNum = 0;
  for (let i = 0; i < elements.length; i++) {
    if (typeof elements[i] === "number" && Number.isFinite(elements[i])) {
      sumNum += elements[i];
    }
  }
  return sumNum;
}

module.exports = sum;
