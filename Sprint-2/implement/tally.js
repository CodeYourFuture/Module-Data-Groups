
function tally(arr) {
	if (!Array.isArray(arr)) throw new Error('Input must be an array');
	const counts = Object.create(null);
	for (const item of arr) {
		counts[item] = (counts[item] || 0) + 1;
	}
	return counts;
}

module.exports = tally;
