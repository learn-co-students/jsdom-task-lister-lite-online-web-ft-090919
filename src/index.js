document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('input[type="submit"]').addEventListener("click", function(event){
    console.log("hey, I'm executing")
    let text = document.getElementById('new-task-description').value;
    document.getElementById('tasks').innerHTML += text;
    event.preventDefault();
    }, false);
});
