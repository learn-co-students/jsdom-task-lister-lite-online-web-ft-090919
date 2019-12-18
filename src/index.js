document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const submitButton = document.querySelector("#submit")
  const textBox = document.querySelector("#new-task-description")
  const toDoList = document.querySelector("#tasks")

  console.log("loaded")

  submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("event triggered")
    addToDo(textBox.value)
    textBox.value = ""
  })

  function addToDo(string) {
    let liElement = document.createElement("li")
    liElement.innerHTML = string
    console.log(liElement)
    toDoList.appendChild(liElement)
    console.log("li should be added")
  }
  
});

