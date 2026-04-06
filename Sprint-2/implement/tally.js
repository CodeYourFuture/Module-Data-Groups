function tally(list) {
  if (!Array.isArray(list)) {
    throw new Error("Invalid Parameter");
  }

  const uniqueItems = Object.create(null);

  for (const item of list) {
    uniqueItems[item] = (uniqueItems[item] || 0) + 1;
  }

  return uniqueItems;
}

module.exports = tally;
