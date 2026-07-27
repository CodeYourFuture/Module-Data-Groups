function parseQueryString(queryString) {
  const result = {};

  // Return empty object for empty or non-string inputs
  if (typeof queryString !== "string" || !queryString.trim()) {
    return result;
  }

  // Optional: strip leading '?' if passed a full URL search string (e.g., "?a=1")
  const sanitizedInput = queryString.startsWith("?")
    ? queryString.slice(1)
    : queryString;

  // Split pairs by '&'
  const pairs = sanitizedInput.split("&");

  for (const pair of pairs) {
    // Ignore empty pairs (e.g. from consecutive '&&' or trailing '&')
    if (!pair) continue;

    // Find the FIRST '=' to separate key and value correctly
    const equalIndex = pair.indexOf("=");

    let rawKey = "";
    let rawValue = "";

    if (equalIndex === -1) {
      // Key with no '=' (e.g., "key" -> key="key", value="")
      rawKey = pair;
      rawValue = "";
    } else {
      // Split strictly on the first '=' so values containing '=' stay intact
      rawKey = pair.slice(0, equalIndex);
      rawValue = pair.slice(equalIndex + 1);
    }

    // Helper to decode query string encoding (+ to space, percent-encoding)
    const decodeParam = (str) => {
      try {
        return decodeURIComponent(str.replace(/\+/g, " "));
      } catch {
        // Fallback if URI decoding fails on malformed input
        return str.replace(/\+/g, " ");
      }
    };

    const key = decodeParam(rawKey);
    const value = decodeParam(rawValue);

    // Handle single key vs duplicate keys
    if (Object.prototype.hasOwnProperty.call(result, key)) {
      if (Array.isArray(result[key])) {
        result[key].push(value);
      } else {
        result[key] = [result[key], value];
      }
    } else {
      result[key] = value;
    }
  }

  return result;
}

module.exports = parseQueryString;
