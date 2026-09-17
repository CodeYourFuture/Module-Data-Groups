function tally(list) {
  if (!Array.isArray(list)) {
    throw new Error("tally requires an array");
  }

  const result = {};

  for (const item of list) {
    if (Object.hasOwn(result, item)) {
      result[item]++;
    } else {
      result[item] = 1;
    }
  }

  return result;
}

module.exports = tally;

/**
 * tally array
 *
 * In this task, you'll need to implement a function called tally
 * that will take a list of items and count the frequency of each item
 * in an array
 *
 * For example:
 *
 * tally(['a']), target output: { a: 1 }
 * tally(['a', 'a', 'a']), target output: { a: 3 }
 * tally(['a', 'a', 'b', 'c']), target output: { a : 2, b: 1, c: 1 }
 */
