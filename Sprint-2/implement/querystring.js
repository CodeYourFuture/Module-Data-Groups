function parseQueryString(query) {
  const result = {};

  if (!query) {
    return result;
  }

  // URLSearchParams treats "+" as space (" ").
  // Our tests expect "+" to stay as "+" (e.g. "x=y+1"),
  // so we temporarily encode "+" as "%2B" before parsing.
  const safeQuery = query.replace(/\+/g, "%2B");

  const params = new URLSearchParams(safeQuery);

  for (const [key, value] of params) {
    result[key] = value;
  }

  return result;
}

module.exports = parseQueryString;
