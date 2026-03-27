/*
  A ToDo List (todos) is expected to be represented as an array of objects in 
  the following manner:

  [
    { task: "Description of task 1", completed: false},
    { task: "Description of task 2", completed: true}
  ]

*/

// Append a new task to todos[]
export function addTask(todos, task, completed = false, deadlineDate = null) {
  todos.push({ task, completed, deadlineDate });
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

// Delete all completed tasks
export function deleteCompleted(todoList) {
  for (let index = todoList.length - 1; index >= 0; index--) {
    if (todoList[index].completed) todoList.splice(index, 1);
  }
}
