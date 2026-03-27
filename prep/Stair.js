function drawStairs(n) {
  let result = "";

  for (let i = 0; i < n; i++) {
    // Add spaces BEFORE the "I"
    result += writeSpace(i);

    // Then add the "I"
    result += "I";

    // Add newline if not the last line
    if (i < n - 1) {
      result += "\n";
    }
  }

  return result;
}

function writeSpace(n) {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += "*"; // Use spaces, not asterisks
  }
  return result;
}


console.log(drawStairs(16));
console.log(drawStairs(1));
console.log(drawStairs(1));
console.log ("^^^^")
