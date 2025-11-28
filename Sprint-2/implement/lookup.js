function createLookup(pairs) {
    const lookup = {};
    for (const [countryCode, currencyCode] of pairs) {
        lookup[countryCode] = currencyCode;
    }
    return lookup;  
}

module.exports = createLookup;