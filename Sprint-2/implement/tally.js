// In this task, you'll need to implement a function called tally
//  * that will take a list of items and count the frequency of each item
//  * in an array
//  *
//  * For example:
//  *
//  * tally(['a']), target output: { a: 1 }
//  * tally(['a', 'a', 'a']), target output: { a: 3 }
//  * tally(['a', 'a', 'b', 'c']), target output: { a : 2, b: 1, c: 1 }

const tally = (list) => {
  // check for an invalid input that is not an array
  if (!Array.isArray(list)) {
    throw new Error("It is not a valid array");
  }

  const object = {};

  for (const item of list) {
    // if exists, increment
    if (object[item]) {
      object[item] += 1;
    } else {
      object[item] = 1;
    }
  }

  return object;
};

module.exports = tally;
