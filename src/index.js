document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form")
  const taskDescription = document.getElementById("new-task-description")
  const tasks = document.getElementById("tasks")
  
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    tasks.innerHTML += `<li>${taskDescription.value}</li>`
    taskDescription.value = ""
  })
});
