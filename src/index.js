document.addEventListener("DOMContentLoaded", () => {
  console.log("You're good to go!")
});


document.getElementById('btn').addEventListener('click', function(event){
  let content = document.getElementById('new-task-description').value 
  document.getElementById('tasks').innerHTML += content
  event.preventDefault()
}, false)


// Idk if this meets the requirements???


// get user input from input box
// display user input in my todos box
