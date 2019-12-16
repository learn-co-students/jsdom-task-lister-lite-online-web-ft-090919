// collection of required DOM elements
const domElements = {
  formInput: document.querySelector('#new-task-description'),
  prioritySelection: document.querySelector('#task-priority-select'),
  submitButton: document.querySelector('input[type=submit]'),
  taskList: document.getElementById('tasks'),
  itemDelete: document.querySelector('#far'),
  sortButtons: document.querySelector('.sort-group')
}

const tasks = [];

function saveTask(taskName) {
  const select = domElements.prioritySelection;
  const priorityValue = select[select.selectedIndex].value;
  const taskObj = {};
  taskObj[taskName.toLowerCase()] = parseInt(priorityValue);
  tasks.push(taskObj);

  return taskObj;
}

// display task with priority highlighting
function renderTask(taskObj) {
  const taskName = Object.keys(taskObj)[0];
  domElements.taskList.appendChild(createListItem(taskName));
  applyPriorityStyle(taskObj);
}

// turn user input into a list item
function createListItem(taskName) {
  const listItemContent = getListItemContent(taskName);
  const trashIcon = getTrashIcon();
  listItemContent.appendChild(trashIcon);

  return listItemContent;
}

function getListItemContent(taskName) {
  const listItem = document.createElement("li");
  const textContainer = document.createElement("span");
  const listItemText = document.createTextNode(taskName);
  textContainer.appendChild(listItemText);
  listItem.appendChild(textContainer);

  return listItem;
}

function getTrashIcon() {
  const trashIcon = document.createElement("i");
  trashIcon.className += "far fa-trash-alt";

  return trashIcon;
}

function applyPriorityStyle(task) {
  const priorityLevel = Object.values(task)[0];
  const priorityStyle = getSelectedPriorityStyle(priorityLevel);
  const targetListItem = domElements.taskList.lastChild;
  targetListItem.firstChild.className += priorityStyle;
}

function getSelectedPriorityStyle(priorityLevel) {
  switch (priorityLevel) {
    case 1:
      priorityStyle = "low";
      break;
    case 2:
      priorityStyle = "medium";
      break;
    case 3:
      priorityStyle = "high";
      break;
    default:
      alert("Something went wrong!");
  }

  return priorityStyle;
}

function resetFields() {
  domElements.formInput.value = "";
  domElements.prioritySelection.selectedIndex = 0;
}

function deleteTask(selection) {
  tasks.pop();
  selection.parentNode.remove();
}

// function sortList(sortingPreference) {
//   const compare;
//   if (sortingPreference == "high") {
//     compare = ()
//   }
// }

document.addEventListener("DOMContentLoaded", () => {
  domElements.submitButton.addEventListener('click', function(e) {
    e.preventDefault();
    const taskName = domElements.formInput.value;
    const task = saveTask(taskName);
    renderTask(task);
    resetFields();
  });

  // sort task
  domElements.sortButtons.addEventListener('click', function(e) {
    e.target.id == "sort-highest" ? sortList(high) : sortList(low);
  });

  // delete task
  domElements.taskList.addEventListener('click', function(e) {
    if (e.target.className == "far fa-trash-alt") {
      deleteTask(e.target);
    }
  });
});
