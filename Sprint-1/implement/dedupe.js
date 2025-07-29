function dedupe(list) {
  let result = [];

  for (let item of list) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }
  return result;
}

console.log(dedupe([1, 1, 1, 2, 3, 4, 4, 5]));
