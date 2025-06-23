function dedupe(elements) {
  let new_array = [];
  for (let i = 0; i < elements.length; i++) {
    if (!new_array.includes(elements[i])) {
      new_array.push(elements[i]);
    }
  }
  console.log(new_array);
  return new_array;
}

const arr = [1, 4, 9, 9];
dedupe(arr);
