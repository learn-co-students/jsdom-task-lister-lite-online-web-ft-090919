document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("create-task-form");
  const task = document.getElementById("new-task-description");
  const taskList = document.getElementById("tasks");

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const newTask = document.createElement('li');
    if (task.value !== '') {
      newTask.innerText = task.value
      taskList.appendChild(newTask)
    }
  });

});

