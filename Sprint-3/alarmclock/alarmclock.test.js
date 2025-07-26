const { getTimeLeft } = require("./alarmclock");
//jest.advanceTimersByTime((getTimeLeft() + 1) * 1000);
/* ======= TESTS - DO NOT MODIFY ===== 
There are some Tests in this file that will help you work out if your code is working.
*/

const path = require("path");
const { JSDOM } = require("jsdom");

let page = null;

beforeEach(async () => {
  page = await JSDOM.fromFile(path.join(__dirname, "index.html"), {
    resources: "usable",
    runScripts: "dangerously",
  });

  jest.useFakeTimers();

  // do this so students can use element.innerText which jsdom does not implement
  Object.defineProperty(page.window.HTMLElement.prototype, "innerText", {
    get() {
      return this.textContent;
    },
    set(value) {
      this.textContent = value;
    },
  });

  return new Promise((res) => {
    page.window.addEventListener("load", res);
  });
});

afterEach(() => {
  // Reset the timers after each test
  jest.clearAllTimers();
  
  jest.useRealTimers();
  page = null;
});

test("should set heading when button is clicked", () => {
  const heading = page.window.document.querySelector("#timeRemaining");
  const input = page.window.document.querySelector("#alarmSet");
  const button = page.window.document.querySelector("#set");

  input.value = "19";
  button.click();

  expect(heading).toHaveTextContent("Time Remaining: 00:19");
});

test("should split values over 60 seconds into minutes and seconds", () => {
  const heading = page.window.document.querySelector("#timeRemaining");
  const input = page.window.document.querySelector("#alarmSet");
  const button = page.window.document.querySelector("#set");

  input.value = "119";
  button.click();

  expect(heading).toHaveTextContent("Time Remaining: 01:59");
});

test("should update the heading while counting down", () => {
  const heading = page.window.document.querySelector("#timeRemaining");
  const input = page.window.document.querySelector("#alarmSet");
  const button = page.window.document.querySelector("#set");

  input.value = "19";
  button.click();

  for (let i = 18; i > 0; i--) {
    jest.runOnlyPendingTimers();
    const seconds = `${i}`.padStart(2, "0");
    expect(heading).toHaveTextContent(`Time Remaining: 00:${seconds}`);
  }
});

test("should count down every 1000 ms", () => {
  const input = page.window.document.querySelector("#alarmSet");
  const button = page.window.document.querySelector("#set");
  const mockTimer = jest.spyOn(page.window, "setInterval");
  mockTimer.mockClear();
  input.value = "19";
  button.click();
  // Record the number of times setInterval has been called
  expect(mockTimer).toHaveBeenCalledTimes(1);
  expect(mockTimer).toHaveBeenLastCalledWith(expect.any(Function), 1000);
 });

test("should play audio when the timer reaches zero", () => {
  const input = page.window.document.querySelector("#alarmSet");
  const button = page.window.document.querySelector("#set");
  const mockPlayAlarm = jest.spyOn(page.window, 'playAlarm').mockImplementation(() => {});
  input.value = "1";
  button.click();
  expect(mockPlayAlarm).toHaveBeenCalledTimes(0);
  jest.advanceTimersByTime(12000);
  expect(mockPlayAlarm).toHaveBeenCalledTimes(1);
  mockPlayAlarm.mockRestore();
});

