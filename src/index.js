document.addEventListener("DOMContentLoaded", () => {
  // your code here
  console.log("loaded!")

  // const taskList = new TaskList();


    //form and relevant input fields
  const form = document.getElementById("create-task-form");
  const task = document.getElementById("new-task-description");
  const taskUL = document.getElementById("tasks");

  //add event listener

  form.addEventListener('submit', (i) => {
    i.preventDefault();
    const newTask = document.createElement('li');
    if (task.value !== '') {
      newTask.innerText = task.value
      taskUL.appendChild(newTask)
    }
  });

  // taskUl.addEventListener("click", (e) => {
  //   if (e.target.nodeName === "BUTTON") {
  //     taskList.deleteTask(e.target.dataset.description);
  //     renderApp();}
  // });

});
