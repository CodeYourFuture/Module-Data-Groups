function dedupe(array) {
  return array.filter((item, index) => {
    return array.indexOf(item) === index;
  });
}

module.exports = dedupe;
