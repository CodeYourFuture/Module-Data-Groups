function dedupe(groupNumber) {
  const seen = new Set()
  const deduped = []

  for (const item of groupNumber) {
    if (!seen.has(item)) {
      seen.add(item)
      deduped.push(item)
    }
  }

  return deduped
}
   

module.exports = dedupe