function parseQueryString(queryString) {
  if (!queryString) return {};
  return queryString.split("&").reduce((acc, pair) => {
    const [key, ...rest] = pair.split("=");
    const rawValue = rest.join("=");
    const decodedKey = decodeURIComponent(key.replace(/\+/g, " "));
    const decodedValue = decodeURIComponent(rawValue.replace(/\+/g, " "));
    acc[decodedKey] = decodedValue;
    return acc;
  }, {});
}





module.exports = parseQueryString;
