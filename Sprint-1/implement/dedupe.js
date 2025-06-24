function dedupe(elements) {
  if (!Array.isArray(elements)) {
    // checking if an input is an array
    return null;
  }

  let new_array = [];
  for (let i = 0; i < elements.length; i++) {
    // checking if new_array include elements from an elements array
    if (!new_array.includes(elements[i])) {
      // if not push them to new array
      new_array.push(elements[i]);
    }
  }
  console.log(new_array);
  return new_array;
}

const arr = [1, 4, 9, 9, "gloves", "gloves"];
dedupe(arr);

// console.log(dedupe(arr));

module.exports = dedupe;
