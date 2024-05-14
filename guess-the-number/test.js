// Jest tests
describe("Guess-The-Number-Game", () => {
  // Test for bad input
  test("Invalid input should display error message", () => {
    document.querySelector(".inputs-Values").value = "0";
    guessNumber();
    expect(document.querySelector(".final-out").textContent).toBe(
      "Please enter a number between 1 and 100"
    );

    document.querySelector(".inputs-Values").value = "abc";
    guessNumber();
    expect(document.querySelector(".final-out").textContent).toBe(
      "Please enter a number between 1 and 100"
    );

    document.querySelector(".inputs-Values").value = "200";
    guessNumber();
    expect(document.querySelector(".final-out").textContent).toBe(
      "Please enter a number between 1 and 100"
    );
  });

  // Test for guess higher than the random number
  test("Guessing higher number should display 'Number is too high, try again'", () => {
    document.querySelector(".inputs-Values").value = "80";
    guessNumber();
    expect(document.querySelector(".final-out").textContent).toBe(
      "Number is too high, try again"
    );
  });

  // Test for guess lower than the random number
  test("Guessing lower number should display 'Number is too low, try