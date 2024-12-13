function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key; // Use the value as the new key and the key as the new value
  }

  return invertedObj;
}

module.exports = invert;
