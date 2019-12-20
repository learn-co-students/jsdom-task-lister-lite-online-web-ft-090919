//input id taskInput 
let taskInput;
//submit button element 
let taskButton;
//task ul element 
let tasks; 
//error span 
let taskError; 

//setup page when ready
$(document).ready(function(){
  setupPage();
});

//setups page piece by piece, each function call is dependent upon the previous function call
//ex: setupButton() requires setupInput() to be called first to initialize related DOM elements
function setupPage(){
  setupInput();
  setupButton();
  setupError();
}

//initializes DOM elements related to task input
function setupInput(){
  taskInput = $('#taskInput');
  tasks = $('#tasks');
}

//initializes task submit button DOM element
function setupButton(){
  taskButton = $('#taskButton');
  //on click call addTask()
  taskButton.on('click',addTask);
}

//**Error related functions**\\
//init and hide error DOM element
function setupError(){
  taskError = $('#taskErr');
  taskError.append('*Enter A Value');
  taskError.css('color','red');
  hideError();
}
//hide errors
function hideError(){
  taskError.css('display','none');
  taskError.css('background-color','');
}
//display errors 
function displayError(){
  taskError.css('display','block');
  taskError.css('background-color','pink');
}

//on-click event call
function addTask(){
  hideError();
  const task = taskInput.val();
  if(task) {
    const taskEle = makeTaskEle(task);
    tasks.append(taskEle);
    taskInput.val('');
  }else{
    displayError();
  }
}

//creates <li><button>task</li>
function makeTaskEle(task){
  const listSize = tasks.children().length;
  const taskId = 'task'+listSize;
  const removebtn = `<button onclick="removeTask(${taskId})">Remove</button>`;
  return `<li id="${taskId}">${removebtn} ${task}</li>`;
}

//remove task call
function removeTask(taskEle){
  taskEle.remove();
}