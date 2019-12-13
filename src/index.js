document.addEventListener("DOMContentLoaded", () => {

  // collection of required DOM elements
  const domElements = {
    formInput: document.querySelector('#new-task-description'),
    prioritySelection: document.querySelector('#task-priority-select'),
    submitButton: document.querySelector('input[type=submit]'),
    taskList: document.getElementById('tasks'),
    itemDelete: document.querySelector('#far'),
    sortButtons: document.querySelector('.sort-group')
  }

  let taskArray = [];

  // on submit add user input to list and clear text field
  domElements.submitButton.addEventListener('click', function (e) {
    e.preventDefault();
    renderTask(domElements.formInput.value);
    taskArray.push(domElements.formInput.value);
    domElements.formInput.value = "";
  });

  domElements.sortButtons.addEventListener('click', function(e) {
    e.target.id == "sort-highest" ? sortList(high) : sortList(low);
  });

  // high = high to low priority, low = low to high priority
  function sortList(preference) {
    if (preference == high) {
      
    }
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

  function renderTask(taskName) {
    domElements.taskList.appendChild(createListItem(taskName));
    applyPriorityStyle();
  }

  function applyPriorityStyle() {
    const priorityStyle = getSelectedPriorityStyle();
    const targetListItem = domElements.taskList.lastChild;
    targetListItem.firstChild.className += priorityStyle;
  }

  function getSelectedPriorityStyle() {
    const selection = domElements.prioritySelection;
    const value = selection[selection.selectedIndex].value;
    let priorityStyle = "";

    switch (value) {
      case 'low_priority':
        priorityStyle = "low";
        break;
      case 'medium_priority':
        priorityStyle = "medium";
        break;
      case 'high_priority':
        priorityStyle = "high";
        break;
      default:
        alert("Somwething went wrong!");
    }

    return priorityStyle;
  }

  // delete task
  domElements.taskList.addEventListener('click', function(e) {
    click = e.target;
    if (click.className == "far fa-trash-alt") {
      click.parentNode.remove();
    }
    taskArray = taskArray.filter(function(item) {
      return item !== click.previousSibling.textContent
    });
  });
});
