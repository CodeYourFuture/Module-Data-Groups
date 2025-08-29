function createLookup(array) {
  if (!array) {
    return false;
  }

  const result = {};

  for (let i = 0; i < array.length; i++) {
    const [key, value] = array[i];
    result [key] = value;
  }

  return result;
  
}

module.exports = createLookup;

