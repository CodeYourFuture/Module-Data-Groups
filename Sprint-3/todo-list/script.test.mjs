/**
 * @jest-environment jsdom
 */

import { readFileSync } from "node:fs";

test("renders and manages todos with optional deadlines", async () => {
  const html = readFileSync(new URL("./index.html", import.meta.url), "utf8");
  const appDocument = new DOMParser().parseFromString(html, "text/html");
  document.body.innerHTML = appDocument.body.innerHTML;

  await import("./script.mjs");
  window.dispatchEvent(new Event("load"));

  const list = document.getElementById("todo-list");
  const deadlineInput = document.getElementById("new-task-deadline");
  const deleteCompletedButton = document.getElementById(
    "delete-completed-btn"
  );
  const taskInput = document.getElementById("new-task-input");
  const findTodo = (task) =>
    [...list.querySelectorAll(".todo-item")].find(
      (item) => item.querySelector(".description").textContent === task
    );
  const addTodo = (task, deadline = "") => {
    taskInput.value = task;
    deadlineInput.value = deadline;
    document.getElementById("add-task-btn").click();
  };

  expect(deadlineInput).not.toBeNull();
  expect(deadlineInput.type).toBe("date");
  expect(deleteCompletedButton).not.toBeNull();

  expect(findTodo("Wash the dishes")).not.toBeUndefined();
  expect(findTodo("Do the shopping").classList.contains("completed")).toBe(true);
  expect(
    findTodo("Wash the dishes").querySelector(".deadline").textContent
  ).toBe("");

  addTodo("   ", "2026-12-01");
  expect(list.querySelectorAll(".todo-item")).toHaveLength(2);

  addTodo("Submit coursework", "2026-12-01");
  expect(
    findTodo("Submit coursework").querySelector(".deadline").textContent
  ).toBe("2026-12-01");

  findTodo("Wash the dishes").querySelector(".complete-btn").click();
  expect(findTodo("Wash the dishes").classList.contains("completed")).toBe(true);

  findTodo("Submit coursework").querySelector(".delete-btn").click();
  expect(findTodo("Submit coursework")).toBeUndefined();

  addTodo("Prepare demo", "2026-12-02");
  deleteCompletedButton.click();

  expect(list.querySelectorAll(".todo-item")).toHaveLength(1);
  expect(
    findTodo("Prepare demo").querySelector(".deadline").textContent
  ).toBe("2026-12-02");
  expect(findTodo("Prepare demo").classList.contains("completed")).toBe(false);
});
