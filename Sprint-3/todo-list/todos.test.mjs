// Command to execute this script:
//   node --test todos.test.mjs

import * as Todos from "./todos.mjs";
import { describe, it } from "node:test";
import assert from "node:assert/strict";

// Return a mock ToDo List data with exactly 4 elements.
function createMockTodos() {
  return [
    { task: "Task 1 description", completed: true, deadline: "2026-04-01" },
    { task: "Task 2 description", completed: false, deadline: null },
    { task: "Task 3 description", completed: true, deadline: "2026-04-05" },
    { task: "Task 4 description", completed: false, deadline: null },
  ];
}

// A mock task to simulate user input
const theTask = { task: "The Task", completed: false, deadline: null };

describe("addTask()", () => {
  it("Add a task to an empty ToDo list", () => {
    let todos = [];
    Todos.addTask(todos, theTask.task, theTask.completed);
    assert.strictEqual(todos.length, 1);
    assert.deepEqual(todos[0], theTask);
  });

  it("Should append a new task to the end of a ToDo list", () => {
    const todos = createMockTodos();
    const lengthBeforeAddition = todos.length;
    Todos.addTask(todos, theTask.task, theTask.completed);
    assert.strictEqual(todos.length, lengthBeforeAddition + 1);
    assert.deepEqual(todos[todos.length - 1], theTask);
  });
});

describe("deleteTask()", () => {
  it("Delete the first task", () => {
    const todos = createMockTodos();
    const todosBeforeDeletion = createMockTodos();
    const lengthBeforeDeletion = todos.length;
    Todos.deleteTask(todos, 0);

    assert.strictEqual(todos.length, lengthBeforeDeletion - 1);
    assert.deepEqual(todos[0], todosBeforeDeletion[1]);
    assert.deepEqual(todos[1], todosBeforeDeletion[2]);
    assert.deepEqual(todos[2], todosBeforeDeletion[3]);
  });

  it("Delete the second task (a middle task)", () => {
    const todos = createMockTodos();
    const todosBeforeDeletion = createMockTodos();
    const lengthBeforeDeletion = todos.length;
    Todos.deleteTask(todos, 1);

    assert.strictEqual(todos.length, lengthBeforeDeletion - 1);
    assert.deepEqual(todos[0], todosBeforeDeletion[0]);
    assert.deepEqual(todos[1], todosBeforeDeletion[2]);
    assert.deepEqual(todos[2], todosBeforeDeletion[3]);
  });

  it("Delete the last task", () => {
    const todos = createMockTodos();
    const todosBeforeDeletion = createMockTodos();
    const lengthBeforeDeletion = todos.length;
    Todos.deleteTask(todos, todos.length - 1);

    assert.strictEqual(todos.length, lengthBeforeDeletion - 1);
    assert.deepEqual(todos[0], todosBeforeDeletion[0]);
    assert.deepEqual(todos[1], todosBeforeDeletion[1]);
    assert.deepEqual(todos[2], todosBeforeDeletion[2]);
  });

  it("Delete a non-existing task", () => {
    const todos = createMockTodos();
    const todosBeforeDeletion = createMockTodos();
    Todos.deleteTask(todos, 10);
    assert.deepEqual(todos, todosBeforeDeletion);

    Todos.deleteTask(todos, -1);
    assert.deepEqual(todos, todosBeforeDeletion);
  });
});

describe("toggleCompletedOnTask()", () => {
  it("Expect the 'completed' property to toggle on an existing task", () => {
    const todos = createMockTodos();
    const taskIndex = 1;
    const completedStateBeforeToggle = todos[taskIndex].completed;
    Todos.toggleCompletedOnTask(todos, taskIndex);
    assert.strictEqual(todos[taskIndex].completed, !completedStateBeforeToggle);

    // Toggle again
    Todos.toggleCompletedOnTask(todos, taskIndex);
    assert.strictEqual(todos[taskIndex].completed, completedStateBeforeToggle);
  });

  it("Expect toggling on a task does not affect other tasks", () => {
    const todos = createMockTodos();
    const todosBeforeToggle = createMockTodos();
    Todos.toggleCompletedOnTask(todos, 1);

    assert.deepEqual(todos[0], todosBeforeToggle[0]);
    assert.deepEqual(todos[2], todosBeforeToggle[2]);
    assert.deepEqual(todos[3], todosBeforeToggle[3]);
  });

  it("Expect no change when toggling on a non-existing task", () => {
    const todos = createMockTodos();
    const todosBeforeToggle = createMockTodos();

    Todos.toggleCompletedOnTask(todos, 10);
    assert.deepEqual(todos, todosBeforeToggle);

    Todos.toggleCompletedOnTask(todos, -1);
    assert.deepEqual(todos, todosBeforeToggle);
  });
});

describe("deleteCompleted()", () => {
  it("Remove all completed tasks", () => {
    const todos = createMockTodos();

    Todos.deleteCompleted(todos);

    assert.strictEqual(todos.length, 2);
    assert.strictEqual(todos[0].completed, false);
    assert.strictEqual(todos[1].completed, false);
    assert.strictEqual(todos[0].task, "Task 2 description");
    assert.strictEqual(todos[1].task, "Task 4 description");
  });

  it("No change if no tasks are completed", () => {
    const todos = [
      { task: "Task A", completed: false },
      { task: "Task B", completed: false }
    ];

    const before = JSON.parse(JSON.stringify(todos));
    Todos.deleteCompleted(todos);
    assert.deepEqual(todos, before);
  });

  it("All tasks removed if all are completed", () => {
    const todos = [
      { task: "Task A", completed: true },
      { task: "Task B", completed: true }
    ];

    Todos.deleteCompleted(todos);
    assert.strictEqual(todos.length, 0);
  });
});
