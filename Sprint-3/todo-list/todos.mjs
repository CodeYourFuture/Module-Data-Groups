/*
  A ToDo List (todos) is expected to be represented as an array of objects in 
  the following manner:

  [
    { task: "Description of task 1", completed: false},
    { task: "Description of task 2", completed: true}
  ]

*/

// Append a new task to todos[]
export function addTask(todos, task, completed = false, deadline = null) {
  const todo = { task, completed };
  if (deadline) {
    todo.deadline = deadline;
  }
  todos.push(todo);
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

// Delete all completed todos from todos[]
export function deleteCompleted(todos) {
  for (let i = todos.length - 1; i >= 0; i--) {
    if (todos[i].completed) {
      deleteTask(todos, i);
    }
  }
  return todos;
}

// Calculate how many days are left until the deadline (relative to today).
// Returns an integer: negative if overdue, 0 if due today, positive if due in the future.
export function getDaysRemaining(deadlineDateStr, today = new Date()) {
  if (!deadlineDateStr) return null;
  const [year, month, day] = deadlineDateStr.split("-").map(Number);
  const deadlineDate = new Date(year, month - 1, day);
  const todayDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );

  const diffTime = deadlineDate - todayDate;
  const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}
