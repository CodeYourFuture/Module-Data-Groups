/*
  A ToDo List (todos) is represented as an array of objects in this format:

  [
    { task: "Description of task 1", completed: false },
    { task: "Description of task 2", completed: true, deadline: "2026-03-25" }
  ]
*/

// Append a new task to todos[]
export function addTask(todos, task, completed = false, deadline = "") {
  const newTask = { task, completed };

  if (deadline) {
    newTask.deadline = deadline;
  }

  todos.push(newTask);
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

// Delete all completed tasks from the todos array
export function deleteCompletedTasks(todos) {
  const incompleteTasks = todos.filter((todo) => !todo.completed);
  todos.length = 0;
  todos.push(...incompleteTasks);
}
