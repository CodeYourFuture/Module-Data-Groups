function parseQueryString(query) {
  const params = {};

  // Remove the leading '?' if it exists
  query = query.startsWith('?') ? query.slice(1) : query;

  // Split the query string by '&' to get individual key-value pairs
  const pairs = query.split('&');

  pairs.forEach(pair => {
    const [key, value = ''] = pair.split('=', 2); // Split only at the first '='
    // Decode the key and value, and handle any invalid characters
    const decodedKey = decodeURIComponent(key);
    const decodedValue = decodeURIComponent(value);

    params[decodedKey] = decodedValue;
  });

  return params;
}

module.exports = parseQueryString;
