function tally(arr) {
  if (!Array.isArray(arr) || arguments.length !== 1) {
    throw new Error("Input must be an array");
  }
  const result = Object.create(null);
  for (const item of arr) {

    const key =
      item === null ? "_null_" : item === undefined ? "_undefined_" : item;

    result[key] = (result[key] || 0) + 1;

    // result[item] = (result[item] || 0) + 1;
  }
  console.log(result);

  return result;
}

module.exports = tally;
