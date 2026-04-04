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
  todos.push({ task, completed }); // Add a new task object to the end of the todos array
}

// Delete todos[taskIndex] if it exists // Note: This function modifies the original todos array.
export function deleteTask(todos, taskIndex) {
  if (todos[taskIndex]) {
    //check if the task exists before trying to delete it
    todos.splice(taskIndex, 1); //remove the task at the specified index
  }
}

// Toggle the "completed" property of todos[taskIndex] if the task exists.
export function toggleCompletedOnTask(todos, taskIndex) {
  // Note: This function modifies the original todos array.
  if (todos[taskIndex]) {
    //check if the task exists before trying to toggle its completed status
    todos[taskIndex].completed = !todos[taskIndex].completed; //toggle the completed status of the task at the specified index
  }
}
// Delete completed tasks
export function deleteCompleted(todos) {
  for (let i = todos.length - 1; i >= 0; i--) {
    if (todos[i].completed) {
      todos.splice(i, 1);
    }
  }
}
