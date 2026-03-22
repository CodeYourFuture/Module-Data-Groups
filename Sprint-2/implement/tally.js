function tally(array) {
    if (!Array.isArray(array)) {
      throw new Error("Invalid input: expected an array");
  }

    const count = Object.create(null);

  for (const item of array) {
    if (count[item]) {
      count[item] += 1;
    } else {
      count[item] = 1;
    }
  }

  return count;
}

console.log(tally([ 2,"bee",2,"apple","apple",2, "banana"]))

try {
  console.log(tally('morning'));
} catch (err) {
  console.error(err.message);
}


module.exports = tally;
