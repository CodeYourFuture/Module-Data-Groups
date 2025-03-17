// isEmpty checks if param is an array and empty
function isEmpty(elements) {
  return Array.isArray(elements) && elements.length === 0;
}

module.exports = isEmpty;
