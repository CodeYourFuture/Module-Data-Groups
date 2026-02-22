function tally(list) {
  if (!Array.isArray(list)) throw new Error("Not an array.");
  const obj = Object.create(null);
  return list.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, obj);
}

module.exports = tally;
