// The tests is prepared to demonstrate we can test the functions
// in a module independently.

// Command to execute this script:
//   npm test todos.test.mjs

// Import all the exported members through an object
import * as Todos from "./todos.mjs";

// Return a mock ToDo List data with exactly 4 elements.
function createMockTodos() {
  return [
    { task: "Task 1 description", completed: true },
    { task: "Task 2 description", completed: false },
    { task: "Task 3 description", completed: true },
    { task: "Task 4 description", completed: false },        
  ];
}

// A mock task to simulate user input
const theTask = { task: "The Task", completed: false };

describe("addTask()", () => {
  test("Add a task to an empty ToDo list", () => {
    let todos = [];
    Todos.addTask(todos, theTask.task, theTask.completed);
    expect(todos).toHaveLength(1);
    expect(todos[0]).toEqual(theTask);
  });

  test("Should append a new task to the end of a ToDo list", () => {

    const todos = createMockTodos();
    const lengthBeforeAddition = todos.length;
    Todos.addTask(todos, theTask.task, theTask.completed);
    // todos should now have one more task
    expect(todos).toHaveLength(lengthBeforeAddition + 1);

    // New task should be appended to the todos
    expect(todos[todos.length - 1]).toEqual(theTask);
  });
});

describe("deleteTask()", () => {

  test("Delete the first task", () => {
    const todos = createMockTodos();
    const todosBeforeDeletion = createMockTodos();
    const lengthBeforeDeletion = todos.length;
    Todos.deleteTask(todos, 0);

    expect(todos).toHaveLength(lengthBeforeDeletion - 1);

    expect(todos[0]).toEqual(todosBeforeDeletion[1]);
    expect(todos[1]).toEqual(todosBeforeDeletion[2]);
    expect(todos[2]).toEqual(todosBeforeDeletion[3]);        
  });

  test("Delete the second task (a middle task)", () => {
    const todos = createMockTodos();
    const todosBeforeDeletion = createMockTodos();
    const lengthBeforeDeletion = todos.length;
    Todos.deleteTask(todos, 1);

    expect(todos).toHaveLength(lengthBeforeDeletion - 1);

    expect(todos[0]).toEqual(todosBeforeDeletion[0]);
    expect(todos[1]).toEqual(todosBeforeDeletion[2]);
    expect(todos[2]).toEqual(todosBeforeDeletion[3]);        
  });

  test("Delete the last task", () => {
    const todos = createMockTodos();
    const todosBeforeDeletion = createMockTodos();
    const lengthBeforeDeletion = todos.length;
    Todos.deleteTask(todos, todos.length - 1);

    expect(todos).toHaveLength(lengthBeforeDeletion - 1);

    expect(todos[0]).toEqual(todosBeforeDeletion[0]);
    expect(todos[1]).toEqual(todosBeforeDeletion[1]);
    expect(todos[2]).toEqual(todosBeforeDeletion[2]);        
  });

  test("Delete a non-existing task", () => {
    const todos = createMockTodos();
    const todosBeforeDeletion = createMockTodos();
    Todos.deleteTask(todos, 10);
    expect(todos).toEqual(todosBeforeDeletion);

    Todos.deleteTask(todos, -1);
    expect(todos).toEqual(todosBeforeDeletion);
  });
});

describe("toggleCompletedOnTask()", () => {

  test("Expect the 'completed' property to toggle on an existing task", () => {
    const todos = createMockTodos();
    const taskIndex = 1;
    const completedStateBeforeToggle = todos[taskIndex].completed;
    Todos.toggleCompletedOnTask(todos, taskIndex);
    expect(todos[taskIndex].completed).toEqual(!completedStateBeforeToggle);

    // Toggle again
    Todos.toggleCompletedOnTask(todos, taskIndex);
    expect(todos[taskIndex].completed).toEqual(completedStateBeforeToggle);
  });

  test("Expect toggling on a task does not affect other tasks", () => {
    const todos = createMockTodos();
    const todosBeforeToggle = createMockTodos();
    Todos.toggleCompletedOnTask(todos, 1);
    
    expect(todos[0]).toEqual(todosBeforeToggle[0]);    
    expect(todos[2]).toEqual(todosBeforeToggle[2]);
    expect(todos[3]).toEqual(todosBeforeToggle[3]);
  });


  test("Expect no change when toggling on a non-existing task", () => {
    const todos = createMockTodos();
    const todosBeforeToggle = createMockTodos();

    Todos.toggleCompletedOnTask(todos, 10);
    expect(todos).toEqual(todosBeforeToggle);

    Todos.toggleCompletedOnTask(todos, -1);
    expect(todos).toEqual(todosBeforeToggle);
  });
});

