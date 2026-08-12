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
  todos.push({ task, completed, deadline });
}

export function deleteTask(todos, taskIndex) {
  if (todos[taskIndex]) {
    todos.splice(taskIndex, 1);
  }
}

export function toggleCompletedOnTask(todos, taskIndex) {
  if (todos[taskIndex]) {
    todos[taskIndex].completed = !todos[taskIndex].completed;
  }
}

export function deleteCompleted(todos) {
  for (let i = todos.length - 1; i >= 0; i--) {
    if (todos[i].completed) {
      todos.splice(i, 1);
    }
  }
}
// Return a human-readable string describing time left until deadline.
// Returns null if there's no deadline.
export function getDeadlineStatus(deadline) {
  if (!deadline) return null;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const dueDate = new Date(deadline);
  dueDate.setHours(0, 0, 0, 0);

  const msPerDay = 1000 * 60 * 60 * 24;
  const daysLeft = Math.round((dueDate - today) / msPerDay);

  if (daysLeft > 0) return `Due in ${daysLeft} day${daysLeft === 1 ? "" : "s"}`;
  if (daysLeft === 0) return "Due today";
  return `Overdue by ${Math.abs(daysLeft)} day${Math.abs(daysLeft) === 1 ? "" : "s"}`;
}