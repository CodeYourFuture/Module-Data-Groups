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

// Delete completed tasks from the todos array
export function deleteCompleted(todos) {
  for (let taskIndex = todos.length - 1; taskIndex >= 0; taskIndex--) {
    // taskIndex starts from last index,
    // loop continue up to 0, taskIndex--, moves backward one index each time.
    if (todos[taskIndex].completed === true) {
      todos.splice(taskIndex, 1); //removes completed items
    }
  }
}
