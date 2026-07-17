function dedupe(array) {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (!newArray.includes(array[i])) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

module.exports = dedupe;
