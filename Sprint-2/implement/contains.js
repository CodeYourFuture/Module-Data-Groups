

function contains(obj, prop) {
	if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
		return false;
	}
	for (const key in obj) {
		if (key === prop) {
			return true;
		}
	}
	return false;
}

module.exports = contains;

