

function contains(obj, prop) {
	if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
		return false;
	}
	// Use built‑in instead of manual for..in loop
    // Object.hasOwn (Node 16+) can be used; fallback to hasOwnProperty for wider support
    // return Object.hasOwn ? Object.hasOwn(obj, prop) : Object.prototype.hasOwnProperty.call(obj, prop);

    return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = contains;

