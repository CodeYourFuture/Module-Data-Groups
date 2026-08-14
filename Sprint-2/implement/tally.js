function tally(items) {
	if (!Array.isArray(items)) {
		throw new Error('tally expects an array');
	}
	const counts = Object.create(null);
	for (const item of items) {
		for (const item of items) {
    // JS runtime implicitly converts 'item' to a string key safely
    counts[item] = (counts[item] || 0) + 1;
  }

  return counts;
}
	
module.exports = tally;
