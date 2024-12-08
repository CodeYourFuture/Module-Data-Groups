function dedupe(items) {
  const filteredArr = items.filter((item, index) => {
    return items.indexOf(item) === index;
  });

  return filteredArr;
}

module.exports = dedupe;