function dedupe(elements) {
  if (!Array.isArray(elements)) {
    return null;
  }

  let new_array = [];
  for (let i = 0; i < elements.length; i++) {
    if (!new_array.includes(elements[i])) {
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
