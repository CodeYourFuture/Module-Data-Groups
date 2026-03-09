function dedupe(array) {
  const result = [];

  for (let i = 0; i < array.length; i++)
    if (!result.includes(array[i])) {
      result.push(array[i]);
    }

  return result;
}

module.exports = dedupe;
