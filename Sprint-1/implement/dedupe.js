function dedupe(array) {
  const withOutDup = [];
  for (let i = 0; i < array.length; i++) {
    const itemArray = array[i];
    if (!withOutDup.includes(itemArray)) {
      withOutDup.push(itemArray);
    }
  }

  return withOutDup;
}
module.exports = dedupe;
