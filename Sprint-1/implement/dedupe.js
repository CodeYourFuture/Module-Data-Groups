function dedupe(array) {
  if (array.length === 0) {
    return [];
  }

  const duplicates = array.filter(
    (item, index) => array.indexOf(item) !== index
  );

  const set2 = new Set(duplicates);
  return array.filter((item) => !set2.has(item));
}

testVar = [1, 20, "hi", 20, 6, 9, "hey"];
console.log(dedupe(testVar));

module.exports = dedupe;
