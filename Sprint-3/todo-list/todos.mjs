/*
  A ToDo List (todos) is expected to be represented as an array of objects in 
  the following manner:

  [
    { task: "Description of task 1", completed: false},
    { task: "Description of task 2", completed: true}
  ]

*/

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

// Delete all completed tasks if they exist
export function deleteCompleted(todos) {
  for (let index = todos.length - 1; index >= 0; index--) {
    if (todos[index].completed === true) todos.splice(index, 1);
  }
}
