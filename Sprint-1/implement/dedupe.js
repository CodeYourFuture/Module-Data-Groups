function dedupe(elements) {

  const result = [];

  for (const element of elements) {
    if (!result.includes(element)) {
      result.push(element);
    }
  }

  return result;
}

module.exports = dedupe;
console.log(dedupe(["a", "a", "b"]));
