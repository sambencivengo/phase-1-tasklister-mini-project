// Page Elements
const taskContainer = document.getElementById('tasks');
const taskForm = document.getElementById('create-task-form');
const taskInput = document.getElementById('new-task-description');
const taskDescription = document.getElementById('new-task-description');

const start = () => {
  console.log('Hello World');
  createDropdown();
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

function createDropdown() {
  const optionGroup = document.createElement('optgroup');
  const option = document.createElement('option');
}
const submit = document.querySelector('type.submit');

taskForm.addEventListener('submit', submitTask);

window.addEventListener('DOMContentLoaded', start);
