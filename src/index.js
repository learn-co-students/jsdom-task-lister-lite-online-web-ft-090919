document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');

  form.addEventListener('submit', function(event){
    event.preventDefault();

    const li = document.createElement("LI");
    const task = document.getElementById('new-task-description').value;
    const taskUL = document.getElementById('tasks');
    
    li.innerHTML = task

    taskUL.appendChild(li);
  })
});
