function dedupe(input) {
  if (!Array.isArray(input)) {
    return null;
  }

  if (input.length === 0) {
    return [];
  }

  const newArray = [];

  for (let i = 0; i < input.length; i++) {
    const element = input[i];

    if (!newArray.includes(element)) {
      newArray.push(element);
    }
  }
  return newArray;
}

module.exports = dedupe;
