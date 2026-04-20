function dedupe(list) {
  const result = [];

  for (const item of list) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }

  return result; // ✅ always a NEW array
}

module.exports = dedupe;