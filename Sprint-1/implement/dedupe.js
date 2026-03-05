function dedupe(arr) {
  if (!Array.isArray(arr)) return null; 

  const seen = [];
  
  for (const item of arr) {
    if (!seen.includes(item)) {
      seen.push(item);
    }
  }

  return seen;
}
module.exports = dedupe;