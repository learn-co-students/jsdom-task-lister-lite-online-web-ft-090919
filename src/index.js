// collection of required DOM elements
const domElements = {
  formInput: document.querySelector("#new-task-description"),
  prioritySelection: document.querySelector("#task-priority-select"),
  submitButton: document.querySelector("input[type=submit]"),
  taskList: document.getElementById("tasks"),
  itemDelete: document.querySelector("#far"),
  sortButtons: document.querySelector(".sort-group"),
  resetButton: document.querySelector("#reset"),
  // does not include the reset button
  lockableButtons: document.querySelectorAll(".lockable")
};

let tasks = [];
// used to preserve tasks in pre-sorted state
let preservedTasks = [];
// used to ensure only pre-sorted task state is preserved
let preserveLock = false;

function saveTask(taskName) {
  const select = domElements.prioritySelection;
  const priorityValue = select[select.selectedIndex].value;
  const taskObj = {};
  taskObj["task"] = taskName;
  taskObj["priority"] = parseInt(priorityValue);
  tasks.push(taskObj);

  return taskObj;
}

// display task with priority highlighting
function renderList(list) {
  clearList();

  list.forEach(function(taskObj) {
    const listItem = createListItem(taskObj["task"]);
    domElements.taskList.appendChild(listItem);
    applyPriorityStyle(taskObj["priority"]);
  });
}

// turn user input into a list item
function createListItem(taskName) {
  const listItemContent = getListItemContent(taskName);
  const trashIcon = getTrashIcon();
  listItemContent.appendChild(trashIcon);

  return listItemContent;
}

// build out the list element
function getListItemContent(taskName) {
  const listItem = document.createElement("li");
  const textContainer = document.createElement("span");
  textContainer.setAttribute("contenteditable", "true");
  const listItemText = document.createTextNode(taskName);
  textContainer.appendChild(listItemText);
  listItem.appendChild(textContainer);

  return listItem;
}

function getTrashIcon() {
  const trashIcon = document.createElement("i");
  trashIcon.className += "far fa-trash-alt";
  trashIcon.className += " delete";
  trashIcon.className += " lockable";

  return trashIcon;
}

function applyPriorityStyle(priorityLevel) {
  const priorityStyle = getSelectedPriorityStyle(priorityLevel);
  const targetListItem = domElements.taskList.lastChild;
  targetListItem.firstChild.className += priorityStyle;
}

// return css class to apply based on priorityLevel
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

function renderSortedList(sortingPreference) {
  sortList(sortingPreference);
  renderList(tasks);
}

function sortList(sortingPreference) {
  if (preserveLock == false) {
    // deep copy tasks array to be used when sorting is reset
    preservedTasks = _.map(tasks, _.clonedeep);
    // ensure only intended copy is made
    preserveLock = !preserveLock;
  }
  // sort high-to-low and vice-versa
  if (sortingPreference == "high") {
    tasks.sort((a, b) => (a.priority < b.priority ? 1 : -1));
  } else {
    tasks.sort((a, b) => (a.priority > b.priority ? 1 : -1));
  }
}

function clearList() {
  const listItems = document.querySelectorAll("#tasks li");

  for (let i = 0; (li = listItems[i]); i++) {
    li.parentNode.removeChild(li);
  }
}

// toggle disabled status of reset button
function toggleListReset(buttonClass) {
  if (buttonClass == "sort-button disabled") {
    domElements.resetButton.classList.toggle("disabled");
  }
}

// prevent user from adding to / removing from list while in sorted state
function toggleInputState(state) {
  const trashIcons = document.querySelectorAll(".delete");
  const lockableButtons = domElements.lockableButtons;
  const allLockables = [...trashIcons, ...lockableButtons];

  for (const lockable of allLockables) {
    // console.log(lockable.classList.contains("disabled"));
    if (state == "lock" && lockable.classList.contains("disabled")) {
      return;
    } else if (state == "lock" && !lockable.classList.contains("disabled")) {
      lockable.className += " disabled";
    } else if (state == "unlock" && lockable.classList.contains("disabled")) {
      lockable.className = "lockable";
    }
  }
}

// render the list according to user input
function handleSortSelection(input) {
  if (input.value == "sort-highest") {
    renderSortedList("high");
    toggleListReset(domElements.resetButton.className);
    toggleInputState("lock");
  } else {
    renderSortedList("low");
    toggleListReset(domElements.resetButton.className);
    toggleInputState("lock");
  }
}

function validateInput(name, selection) {
  if (name == "" || selection == 0) {
    return false;
  } else {
    return true;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  domElements.submitButton.addEventListener("click", function(e) {
    const taskName = domElements.formInput.value;
    const prioritySelection = domElements.prioritySelection.selectedIndex;

    if (validateInput(taskName, prioritySelection)) {
      e.preventDefault();
      saveTask(taskName);
      clearList();
      renderList(tasks);
      resetFields();
    }
  });

  // sort task
  domElements.resetButton.addEventListener("click", function(e) {
    // resume with preservedTasks state
    tasks = _.map(preservedTasks, _.clonedeep);
    domElements.resetButton.classList += " disabled";
    // preserveLock is set to false
    preserveLock = !preserveLock;
    toggleInputState("unlock");
    renderList(tasks);
  });

  // delete task
  domElements.taskList.addEventListener("click", function(e) {
    if (e.target.className == "far fa-trash-alt delete") {
      deleteTask(e.target);
    }
  });
});
