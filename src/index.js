document.addEventListener("DOMContentLoaded", () => {
  // your code here
    let ul = document.getElementById('tasks');
    let text = document.getElementById('new-task-description');
    document.getElementById('create-task-form').addEventListener('submit', function(e) {
        e.preventDefault();
        let li = document.createElement('li');
        li.innerText = text.value;
        text.value = '';
        ul.appendChild(li);
    });
});
