function parseQueryString(query) {
  if (!query || typeof query !== "string") return {};

  const result = {};

  // Remove leading ? if present
  if (query.startsWith("?")) {
    query = query.slice(1);
  }
   // Split by & and filter out empty chunks (but keep cases like '=')
  const pairs = query.split("&").filter(Boolean);

  for (const pair of pairs) {
    const [rawKey, rawValue] = pair.split("=");
    const key = rawKey !== undefined ? decodeURIComponent(rawKey) : "";
    const value = rawValue !== undefined ? decodeURIComponent(rawValue) : undefined;

    result[key] = value; // Overwrites if key repeats
  }

  return result;
}
module.exports = parseQueryString;
