// Helper function to compare objects (shallow comparison)
function objectsEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}
// Test cases
const testCases = [
  { input: { a: 1 }, expected: { "1": "a" } },
  { input: { a: 1, b: 2 }, expected: { "1": "a", "2": "b" } },
  { input: { x: 10, y: 20 }, expected: { "10": "x", "20": "y" } },
  { input: { a: "hello", b: "world" }, expected: { hello: "a", world: "b" } },
  { input: { a: 1, b: 1 }, expected: { "1": "b" } }, // last key wins
];
// Run tests
testCases.forEach(({ input, expected }, index) => {
  const result = invert(input);
  const pass = objectsEqual(result, expected);
  console.log(`Test ${index + 1}:`, pass ? "✅ PASS" : "❌ FAIL");
  if (!pass) {
    console.log("  Input:", input);
    console.log("  Expected:", expected);
    console.log("  Got:", result);
  }
});