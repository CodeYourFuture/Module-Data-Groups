const path = require("path");
const { JSDOM } = require("jsdom");

let page = null;

beforeEach(async () => {
  page = await JSDOM.fromFile(path.join(__dirname, "index.html"), {
    resources: "usable",
    runScripts: "dangerously",
  });

  jest.useFakeTimers();

  Object.defineProperty(page.window.HTMLElement.prototype, "innerText", {
    get() {
      return this.textContent;
    },
    set(value) {
      this.textContent = value;
    },
  });

  return new Promise((resolve) => {
    page.window.document.addEventListener("load", resolve);
  });
});

afterEach(() => {
  jest.useRealTimers();
  page = null;
});

test("shows the entered time in minutes and seconds", () => {
  const heading = page.window.document.querySelector("#timeRemaining");
  const input = page.window.document.querySelector("#alarmSet");

  input.value = "19";
  page.window.document.querySelector("#set").click();
  expect(heading).toHaveTextContent("Time Remaining: 00:19");

  input.value = "119";
  page.window.document.querySelector("#set").click();
  expect(heading).toHaveTextContent("Time Remaining: 01:59");
});

test("counts down once per second and stops at zero", () => {
  const heading = page.window.document.querySelector("#timeRemaining");
  const input = page.window.document.querySelector("#alarmSet");

  input.value = "2";
  page.window.document.querySelector("#set").click();

  jest.advanceTimersByTime(1000);
  expect(heading).toHaveTextContent("Time Remaining: 00:01");

  jest.advanceTimersByTime(1000);
  expect(heading).toHaveTextContent("Time Remaining: 00:00");
  expect(jest.getTimerCount()).toBe(0);
});

test("plays the alarm and changes the background when the countdown ends", () => {
  const heading = page.window.document.querySelector("#timeRemaining");
  const input = page.window.document.querySelector("#alarmSet");
  const playAlarm = jest.fn();
  page.window.playAlarm = playAlarm;

  input.value = "1";
  page.window.document.querySelector("#set").click();
  expect(playAlarm).not.toHaveBeenCalled();

  jest.advanceTimersByTime(1000);

  expect(heading).toHaveTextContent("Time Remaining: 00:00");
  expect(playAlarm).toHaveBeenCalledTimes(1);
  expect(page.window.document.body.style.backgroundColor).not.toBe("");
});

test("plays a looping alarm immediately when set to zero", () => {
  const heading = page.window.document.querySelector("#timeRemaining");
  const input = page.window.document.querySelector("#alarmSet");
  const playAlarm = jest.fn();
  page.window.playAlarm = playAlarm;

  input.value = "0";
  page.window.document.querySelector("#set").click();

  expect(heading).toHaveTextContent("Time Remaining: 00:00");
  expect(page.window.audio.loop).toBe(true);
  expect(playAlarm).toHaveBeenCalledTimes(1);
  expect(page.window.document.body.style.backgroundColor).not.toBe("");
});

test("stops the alarm when Stop Alarm is clicked", () => {
  const pause = jest.fn();
  page.window.audio.pause = pause;

  page.window.document.querySelector("#stop").click();

  expect(pause).toHaveBeenCalledTimes(1);
});

test("replaces an active countdown when a new alarm is set", () => {
  const heading = page.window.document.querySelector("#timeRemaining");
  const input = page.window.document.querySelector("#alarmSet");
  const playAlarm = jest.fn();
  page.window.playAlarm = playAlarm;

  input.value = "5";
  page.window.document.querySelector("#set").click();
  input.value = "1";
  page.window.document.querySelector("#set").click();

  jest.advanceTimersByTime(1000);

  expect(heading).toHaveTextContent("Time Remaining: 00:00");
  expect(playAlarm).toHaveBeenCalledTimes(1);
});
