function contains(obj, propertyName) {
  if (Array.isArray(obj)) return false; // Skip arrays

  for (let key in obj) {
    if (key === propertyName) return true;
  }
  return false;
}

// console.log(contains(["b", "b", "c"], "0"));

// I was surprised by this example because I noticed that arrays are objects with
// numeric indices.This was not something I fully understood before. In the example,
// for...in iterates over the indices of the array, not the values.
// So when I passed an array like ["b", "b", "c"], the function returned true because
// it was checking for the keys "0", "1", etc., rather than the values themselves.
// I didn't expect this behavior, and it was an interesting realization that arrays work like objects with numeric keys.

module.exports = contains;
