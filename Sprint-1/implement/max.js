

function findMax(elements) {
  if (!Array.isArray(elements)) return -Infinity;

  const nums = elements.filter(val => typeof val === 'number' && !isNaN(val));

  return nums.length > 0 ? Math.max(...nums) : -Infinity;
}

module.exports = findMax;
