// Get references to HTML elements
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Function to create and append a new task item
function createTaskElement(taskText) {
  const taskItem = document.createElement('li');
  taskItem.classList.add('task-item');

  const taskTextElement = document.createElement('span');
  taskTextElement.classList.add('task-text');
  taskTextElement.textContent = taskText;

  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('delete-btn');
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', function () {
    taskItem.remove();
  });

  taskItem.appendChild(taskTextElement);
  taskItem.appendChild(deleteBtn);
  taskList.appendChild(taskItem);
}

// Function to handle the 'Add' button click event
function onAddButtonClick() {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    createTaskElement(taskText);
    taskInput.value = '';
  }
}

// Event listener for the 'Add' button click
addBtn.addEventListener('click', onAddButtonClick);

// Event listener for the 'Enter' key press in the input field
taskInput.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    onAddButtonClick();
  }
});