function parseQueryString(queryString) {
  const result = {};
  if (!queryString) return result;

  const pairs = queryString.split("&");

  pairs.forEach((pair) => {
    if (pair === "") return;

    const index = pair.indexOf("=");

    if (index === -1) {
      result[pair] = "";
    } else {
      const key = pair.slice(0, index);
      const value = pair.slice(index + 1);
      result[key] = value;
    }
  });

  return result;
}

module.exports = parseQueryString;
