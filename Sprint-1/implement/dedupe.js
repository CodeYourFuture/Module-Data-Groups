function dedupe(elements) {
  return [...new Set(elements)];
}

module.exports = dedupe;

console.log(dedupe([4542543, undefined, 4542543, 4542543, null, [], null]));
