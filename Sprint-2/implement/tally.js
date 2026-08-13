function tally(items) {
	if (!Array.isArray(items)) {
		throw new Error('tally expects an array');
	}
	const counts = Object.create(null);
	for (const item of items) {
		// Use the item as the key; this will stringify non-string keys
		const key = String(item);
		counts[key] = (counts[key] || 0) + 1;
	}
	return counts;
}

module.exports = tally;
