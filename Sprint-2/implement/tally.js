function tally(items) {
  if (!Array.isArray(items)) throw new Error("Invalid input");
  const counts = Object.create(null);
    for (const it of items) {
      counts[it] = (counts[it] || 0) + 1;
  }
  return counts;
}

console.log(tally(['a', 'a', 'b']));
// -> { a: 2, b: 1 }

console.log(tally(['toString', 'toString']));
// -> { toString: 2 }


module.exports = tally;
