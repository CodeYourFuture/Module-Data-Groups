function parseQueryString(queryString) {
  const result = {};

  if (!queryString) return result;
  if (queryString.startsWith("?")) {
    queryString = queryString.slice(1);
  }

  const decode = (str) => {
    try {
      return decodeURIComponent(str.replace(/\+/g, " "));
    } catch {
      return str;
    }
  };

  const pairs = queryString.split("&");

  for (const pair of pairs) {
    if (!pair) continue;

    const equalIndex = pair.indexOf("=");
    let rawKey, rawValue;

    if (equalIndex === -1) {
      rawKey = pair;
      rawValue = "";
    } else {
      rawKey = pair.slice(0, equalIndex);
      rawValue = pair.slice(equalIndex + 1);
    }

    const key = decode(rawKey);
    const value = decode(rawValue);

    // Safeguard against prototype pollution while setting keys safely
    if (!Object.hasOwn(result, key)) {
      Object.defineProperty(result, key, {
        value: value,
        writable: true,
        enumerable: true,
        configurable: true,
      });
    } else if (Array.isArray(result[key])) {
      result[key].push(value);
    } else {
      result[key] = [result[key], value];
    }
  }

  return result;
}

module.exports = parseQueryString;
