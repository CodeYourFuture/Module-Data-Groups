/*
  A ToDo List (todos) is expected to be represented as an array of objects in 
  the following manner:

  [
    { task: "Description of task 1", completed: false },
    { task: "Description of task 2", completed: true }
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

// Toggle the "completed" property of todos[taskIndex] if the task exists
export function toggleCompletedOnTask(todos, taskIndex) {
  if (todos[taskIndex]) {
    todos[taskIndex].completed = !todos[taskIndex].completed;
  }
}

// Remove all tasks that are marked as completed using .filter()
export function deleteCompleted(todos) {
  const incompleteTasks = todos.filter(todo => todo.completed === false);
  
  // Clear the original array and fill it with only incomplete tasks
  todos.length = 0;
  todos.push(...incompleteTasks);
}