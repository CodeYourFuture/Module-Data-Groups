function parseQueryString(query) {
  if (!query || typeof query !== "string") return {};

  const result = Object.create(null);

  // Remove leading ? if present
  if (query.startsWith("?")) {
    query = query.slice(1);
  }
   // Split by & and filter out empty chunks (but keep cases like '=')
  const pairs = query.split("&");

 for (const pair of pairs) {
    if (pair === "") continue;

    const [rawKey, rawValue] = pair.split("=");
    const key = rawKey ? decodeURIComponent(rawKey) : "";
    const value = rawValue !== undefined ? decodeURIComponent(rawValue) : undefined;

    if (result.hasOwnProperty(key)) {
      // Convert to array if key already exists
      if (!Array.isArray(result[key])) {
        result[key] = [result[key]];
      }
      result[key].push(value);
    } else {
      result[key] = value;
    }
  }
  return result;
}
module.exports = parseQueryString;
