function dedupe(list) {
  if (!Array.isArray(list)) {
    return null;
  }
  return list.filter((value, index, self) => self.indexOf(value) === index);
}
module.exports = dedupe;
