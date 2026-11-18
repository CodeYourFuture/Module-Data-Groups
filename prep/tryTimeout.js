function printMessage(name) {
  console.log(`My name is ${name}`);
}

setTimeout(printMessage, 3000, "Sally"); // <-- Call printMessage after at least 3000ms, with the argument "Sally"
printMessage("Daniel");
