const { execFileSync } = require("node:child_process");
const path = require("node:path");

function runExercise(file) {
  return execFileSync(process.execPath, [path.join(__dirname, file)], {
    encoding: "utf8",
  }).trim();
}

test("prints the house number", () => {
  expect(runExercise("address.js")).toBe("My house number is 42");
});

test("prints each author property value", () => {
  expect(runExercise("author.js").split(/\r?\n/)).toEqual([
    "Zadie",
    "Smith",
    "writer",
    "40",
    "true",
  ]);
});

test("prints the recipe ingredients on separate lines", () => {
  expect(runExercise("recipe.js").split(/\r?\n/)).toEqual([
    "bruschetta serves 2",
    "  ingredients:",
    "olive oil",
    "tomatoes",
    "salt",
    "pepper",
  ]);
});
