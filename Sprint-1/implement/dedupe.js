

function dedupe(val) {
    if (val.length === new Set(val).size) {
      return val;
    } else {
      return [...new Set(val)];
    }
}

module.exports = dedupe;


