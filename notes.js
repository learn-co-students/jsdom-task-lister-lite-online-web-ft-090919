document.addEventListener("DOMContentLoaded", () => {
    // your code here
    document.querySelector("#create-task-form").addEventListener("submit", function(event) {
      document.getElementById("list").innerHTML += (document.querySelector("#new-task-description").text);
      event.preventDefault();
    }, true);
  });
  

<script src="./src/oo_index.js"></script>
<script src="./src/taskList.js"></script>
<script src="./src/task.js"></script>

<script src="./src/taskList.js"></script> 
<script src="./src/task.js"></script>


JAVASCRIPT:
document.querySelector("#id-checkbox").addEventListener("click", function(event) {
  document.getElementById("output-box").innerHTML += "Sorry! <code>preventDefault()</code> won't let you check this!<br>";
  event.preventDefault();
}, false);


HTML:
<p>Please click on the checkbox control.</p>

<form>
  <label for="id-checkbox">Checkbox:</label>
  <input type="checkbox" id="id-checkbox"/>
</form>

<div id="output-box"></div>