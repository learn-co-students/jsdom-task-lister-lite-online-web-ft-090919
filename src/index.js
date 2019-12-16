

document.addEventListener("DOMContentLoaded", () => {
  let taskForm = document.querySelector("#create-task-form");
  let taskList = document.querySelector("#tasks");
  let taskDescription = document.querySelector("#new-task-description");
  let taskId = 0;


  function removeTask(id){
    var task = document.getElementById(id);
    task.parentNode.removeChild(task);
  }


  function addTask(task){
    let newTask = document.createElement("li");
    newTask.setAttribute("id", "task-"+taskId)
    newTask.innerHTML = `${task} -  <a href="" onclick="removeTask('task-${taskId++}');">Delete</a>`;
    taskList.appendChild(newTask);
  }

  taskForm.addEventListener('submit', function(e){
    e.preventDefault();
    addTask(taskDescription.value);
    taskDescription.value = "";
  });

});
