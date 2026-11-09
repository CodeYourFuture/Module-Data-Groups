function parseQueryString(queryString) {
  const queryParams = new Map();

  for (const [key, value] of new URLSearchParams(queryString)) {
    if (!queryParams.has(key)) {
      queryParams.set(key, value);
    } else {
      const previous = queryParams.get(key);
      queryParams.set(
        key,
        Array.isArray(previous) ? [...previous, value] : [previous, value]
      );
    }
  }

  return Object.fromEntries(queryParams);
}

module.exports = parseQueryString;
