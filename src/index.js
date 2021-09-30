// Page Elements
const taskContainer = document.getElementById('tasks');
const taskForm = document.getElementById('create-task-form');
const taskInput = document.getElementById('new-task-description');

const start = () => {
  console.log('Hello World');
};

const submitTask = (e) => {
  e.preventDefault();
  const li = document.createElement('li');
  let task = taskInput.value;
  if (task.length > 1) {
    li.textContent = task;
    taskContainer.appendChild(li);
  } else {
    alert('Please submit a task');
    taskForm.reset();
  }
  taskForm.reset();
};

taskForm.addEventListener('submit', submitTask);

window.addEventListener('DOMContentLoaded', start);
