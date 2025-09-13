function parseQueryString(queryString) {
  const queryParams = {};

  // Guard: empty or falsy input
  if (!queryString) return queryParams;

  // Remove leading '?'
  if (queryString.startsWith("?")) {
    queryString = queryString.slice(1);
    if (queryString.length === 0) return queryParams;
  }

  const pairs = queryString.split("&").filter((p) => p.length > 0);

  const safeDecode = (s) => {
    // Replace + with space before decoding
    const replaced = s.replace(/\+/g, " ");
    try {
      return decodeURIComponent(replaced);
    } catch (e) {
      // If decoding fails, return the replaced string as-is
      return replaced;
    }
  };

  for (const pair of pairs) {
    const idx = pair.indexOf("=");

    let key;
    let value;
    if (idx === -1) {
      // No '=' present: treat as key with empty string value
      key = pair;
      value = "";
    } else {
      // Split on first '=' only
      key = pair.slice(0, idx);
      value = pair.slice(idx + 1);
    }

    const decodedKey = safeDecode(key);
    const decodedValue = safeDecode(value);

    if (Object.prototype.hasOwnProperty.call(queryParams, decodedKey)) {
      const existing = queryParams[decodedKey];
      if (Array.isArray(existing)) {
        existing.push(decodedValue);
      } else {
        queryParams[decodedKey] = [existing, decodedValue];
      }
    } else {
      queryParams[decodedKey] = decodedValue;
    }
  }

  return queryParams;
}

module.exports = parseQueryString;

