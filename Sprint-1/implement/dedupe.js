function dedupe(list) {
  return list.filter((item, index) => index === list.indexOf(item));
}

module.exports = dedupe;
