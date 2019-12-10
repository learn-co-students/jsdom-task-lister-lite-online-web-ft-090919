document.addEventListener("DOMContentLoaded", () => {

  // collection of DOM elements to manipulate
  const domElements = {
    formInput: document.querySelector('#new-task-description'),
    submitButton: document.querySelector('input[type=submit]'),
    taskList: document.getElementById('tasks'),
    itemDelete: document.querySelector('#far')
  }

  function createListItem(taskName) {
    const listItem = document.createElement("li");
    const listItemContent = document.createTextNode(taskName);
    listItem.appendChild(listItemContent);

    const trashIcon = document.createElement("i");
    trashIcon.className += "far fa-trash-alt";
    listItem.appendChild(trashIcon);

    return listItem;
  }

  function addTaskToList(taskName) {
    domElements.taskList.appendChild(createListItem(taskName));
  }

  // attach event listener to the submit button
  domElements.submitButton.addEventListener('click', function(e) {
    e.preventDefault();
    addTaskToList(domElements.formInput.value);
    domElements.formInput.value = "";
  });

  // attach event listener to the submit button
  domElements.taskList.addEventListener('click', function(e) {
    click = e.target;
    if (click.className == "far fa-trash-alt") {
      click.parentNode.remove();
    }
  });


});
