document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskSubmitted = document.getElementById("create-task-form");
  const task = document.getElementById("new-task-description");
  const list = document.getElementById("tasks");

  taskSubmitted.addEventListener('submit', (event) => {
    event.preventDefault();
    const newTask = document.createElement('li');
    if (task.value !== ''){
      newTask.innerText = task.value
      list.appendChild(newTask)
    }
  });
});
