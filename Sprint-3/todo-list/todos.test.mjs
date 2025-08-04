// The tests is designed to demonstrates we can test the functions
// in a module independently.

// Command to execute this script:
//   npm test todos.test.mjs


// Import all the exported members through an object
import * as Todos from "./todos.mjs";

// Return a mock ToDo List data
// Tests in this file expect exactly 4 elements in the mocked ToDo List
function createMockTodos() {
  return [
    { task: "Task 1 description", completed: true },
    { task: "Task 2 description", completed: false },
    { task: "Task 3 description", completed: true },
    { task: "Task 4 description", completed: false },        
  ];
}

const theTask = { task: "The Task", completed: false };


describe("addTask()", () => {
  test("Add a task to an empty array", () => {
    let todos = [];
    Todos.addTask(todos, theTask.task, theTask.completed);
    expect(todos).toHaveLength(1);
    expect(todos[0]).toEqual(theTask);
  });

  test("Should append a task to end of an array", () => {

    const todos = createMockTodos();
    const lengthBeforeAddingTask = todos.length;
    Todos.addTask(todos, theTask.task, theTask.completed);
    // Array should have one more task
    expect(todos).toHaveLength(lengthBeforeAddingTask + 1);

    // New task should be appended to the array
    expect(todos[todos.length - 1]).toEqual(theTask);
  });
});

describe("deleteTask()", () => {

  test("Delete the first task", () => {
    const todos = createMockTodos();
    const todosBeforeDeletion = createMockTodos();
    const lengthBeforeAddingTask = todos.length;    
    Todos.deleteTask(todos, 0);

    expect(todos).toHaveLength(lengthBeforeAddingTask-1);

    expect(todos[0]).toEqual(todosBeforeDeletion[1]);
    expect(todos[1]).toEqual(todosBeforeDeletion[2]);
    expect(todos[2]).toEqual(todosBeforeDeletion[3]);        
  });

  test("Delete a middle task", () => {
    const todos = createMockTodos();
    const todosBeforeDeletion = createMockTodos();
    const lengthBeforeAddingTask = todos.length;    
    Todos.deleteTask(todos, 1);

    expect(todos).toHaveLength(lengthBeforeAddingTask-1);

    expect(todos[0]).toEqual(todosBeforeDeletion[0]);
    expect(todos[1]).toEqual(todosBeforeDeletion[2]);
    expect(todos[2]).toEqual(todosBeforeDeletion[3]);        
  });

  test("Delete the last task", () => {
    const todos = createMockTodos();
    const todosBeforeDeletion = createMockTodos();
    const lengthBeforeAddingTask = todos.length;    
    Todos.deleteTask(todos, todos.length-1);

    expect(todos).toHaveLength(lengthBeforeAddingTask-1);

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
    const taskIdx = 1;
    const completedBeforeToggle = todos[taskIdx].completed;
    Todos.toggleCompletedOnTask(todos, taskIdx);
    expect(todos[taskIdx].completed).toEqual(!completedBeforeToggle);

    // Toggle again
    Todos.toggleCompletedOnTask(todos, taskIdx);
    expect(todos[taskIdx].completed).toEqual(completedBeforeToggle);  
  });

  test("Expect toggling on an existing task does not affect other tasks", () => {
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

