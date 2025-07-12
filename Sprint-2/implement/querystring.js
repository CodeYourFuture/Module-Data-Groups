function parseQueryString(queryString) {
  const result = {};
  if (queryString.trim().length === 0) {
    return result;
  }
  const pairs = queryString.split("&");

  for (const pair of pairs) {
   
    if (!pair.includes("=")) {
      result[pair] = null;
    } else {

      const firstEqualIndex = pair.indexOf("=");
      const key = pair.slice(0, firstEqualIndex);
      let value = pair.slice(firstEqualIndex + 1);
            value = value === "" ? null : decodeURIComponent(value);
            result[key] = value;

    }

  }

  return result;
}
console.log(parseQueryString(""));
module.exports = parseQueryString;
