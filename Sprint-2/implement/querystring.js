function parseQueryString(query) {
  const result = {};
  if (!query) return result;

  const pairs = query.split("&");

  for (let pair of pairs) {
    const index = pair.indexOf("=");

    // Key has no "=" → value is empty string
    if (index === -1) {
      const key = decodeURIComponent(pair);
      result[key] = "";
      continue;
    }

    // Key is before "=", value is EVERYTHING after "="
    const rawKey = pair.slice(0, index);
    const rawValue = pair.slice(index + 1);

    const key = decodeURIComponent(rawKey);
    const value = decodeURIComponent(rawValue);

    result[key] = value;
  }

  return result;
}

module.exports = parseQueryString;




