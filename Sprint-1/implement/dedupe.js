function dedupe(elements) {
  const elementsClone = [...elements];
  if (elementsClone.length === 0) return elementsClone;

  for (let i = 1; i < elementsClone.length; i++) {
    for (let j = i; j > 0; j--) {
      if (elementsClone[i] === elementsClone[j - 1]) {
        elementsClone.splice(i, 1);
        i--; // because I deleted one element from my array
        break;
      }
    }
  }
  return elementsClone;
}

module.exports = dedupe;
