function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {

  // Handle empty query string
  if (!queryString || queryString === "?") {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const [key, value] = pair.split("=");
    queryParams[key] = value;
  // Remove the leading "?" if it exists
  const cleaned = queryString.startsWith("?")
    ? queryString.slice(1)
    : queryString;

  // Split the query string into segments and filter out empty ones
  const segments = cleaned.split("&").filter(Boolean);

  for (const segment of segments) {
    // Split only on the first =, to allow for values that contain =
    const eqIndex = segment.indexOf("=");

    const key = eqIndex === -1 ? segment : segment.slice(0, eqIndex);
    const value = eqIndex === -1 ? "" : segment.slice(eqIndex + 1);

    if (key) {
      // Decode percent-encoded characters in keys and values
      queryParams[decodeURIComponent(key)] = decodeURIComponent(value);
    }

  return queryParams;
}

module.exports = parseQueryString;
