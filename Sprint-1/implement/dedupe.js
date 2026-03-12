

function dedupe(val) {
    if (val.length === 0) return [];
    if (val.length === new Set(val).size) {
      return val;
    } else {
      return [...new Set(val)];
    }
}

module.exports = dedupe;


