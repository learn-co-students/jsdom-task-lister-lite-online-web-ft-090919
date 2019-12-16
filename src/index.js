// TODO (fix) - when the list is at a certain length,
// the window color changes

document.addEventListener("DOMContentLoaded", () => {
  let test2 = [];
  let doc = document.querySelector("#list");

  $("form").submit(function(event) {
    let serialObject = $(this).serializeArray();
    let serialText = serialObject[0]["value"];
    // create list for task items
    let ul = document.getElementById("tasks");
    // remove bullet point
    ul.style.cssText = "list-style-type: none;";
    // create list item
    let li = document.createElement("li");
    li.innerHTML = serialText;
    ul.appendChild(li);
    document.getElementById('new-task-description').value = "";
    
    event.preventDefault();
  });
});
/* scrapped ideas
    test2.forEach(function(element) {
      let ul = document.createElement('ul');
      let li = document.createElement("li");
      li.innerHTML = element;
      doc.appendChild(ul)
      ul.appendChild(li);
    });*/
