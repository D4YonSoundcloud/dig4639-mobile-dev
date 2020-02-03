import Task from "./Components/Task.js";
import Element from "./Element.js";

let element;
let inputElement;

function runOnLoad() {
  // Create a container for us
  element = document.createElement("div");
  element.id = "container";
  document.body.appendChild(element);

  // Handle adding a new task
  var addTaskButton = document.getElementById("addTask");
  inputElement = document.getElementById("taskText");
  addTaskButton.addEventListener("click", onClick);
}
function onClick() {
    console.log("clicked!");
  //container
  let parentTask = document.createElement("div");
  let checkbox = document.createElement("INPUT");
  checkbox.type = "checkbox";
  parentTask.appendChild(checkbox)
  let taskText  = document.createElement("span");
  taskText.innerHTML = inputElement.value;
  parentTask.appendChild(taskText);
  element.appendChild(parentTask);


  let container = new Element();

  //checkbox

  let task = new Task({
    contents: inputElement.value,
    done: checkbox
  });
  element.appendChild(newTask.render())


}

window.addEventListener("DOMContentLoaded", runOnLoad);
