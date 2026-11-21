/*
  A ToDo List (todos) is expected to be represented as an array of objects in 
  the following manner:

  [
    { task: "Description of task 1", completed: false},
    { task: "Description of task 2", completed: true}
  ]

*/
// In `todos.mjs`, implement a function `deleteCompleted(todoList)` that removes all completed
//    ToDos from the given list.
export function deleteCompleted(todos) {
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].completed === true) {
      todos.splice(i, 1);
      i--;
    }
  }
}
// Append a new task to todos[]
export function addTask(todos, task, completed = false) {
  todos.push({ task, completed });
}

// Delete todos[taskIndex] if it exists
export function deleteTask(todos, taskIndex) {
  if (todos[taskIndex]) {
    todos.splice(taskIndex, 1);
  }
}

// Toggle the "completed" property of todos[taskIndex] if the task exists.
export function toggleCompletedOnTask(todos, taskIndex) {
  if (todos[taskIndex]) {
    todos[taskIndex].completed = !todos[taskIndex].completed;
  }
}
