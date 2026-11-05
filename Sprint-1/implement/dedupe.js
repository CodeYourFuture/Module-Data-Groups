function dedupe(array) {
  const withOutDup = [];
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (!withOutDup.includes(item)) {
      withOutDup.push(item);
    }
  }

  return withOutDup;
}
module.exports = dedupe;
