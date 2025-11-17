function parseQueryString(queryString) {
  const result = {};

  if (!queryString) {
    return result;
  }

  const pairs = queryString.split("&");

  for (const pair of pairs) {
    const index = pair.indexOf("="); // find FIRST "="

    if (index === -1) {
      // no "=" found → key with empty value
      result[pair] = "";
    } else {
      const key = pair.slice(0, index);
      const value = pair.slice(index + 1); // everything after "="
      result[key] = value;
    }
  }

  return result;
}




module.exports = parseQueryString;
