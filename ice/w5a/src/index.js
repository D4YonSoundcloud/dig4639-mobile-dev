<<<<<<< HEAD
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
=======
import Task from "./components/Task/index.js"
let element;
let input;
function runOnLoad()
{
    // Create a container for us
    element = document.createElement("div");
    element.id = "container";
    document.body.appendChild(element);
    input = document.getElementById("taskText");
    // Handle adding a new task
    var addTaskButton = document.getElementById("addTask");
    addTaskButton.addEventListener("click", onClick)
>>>>>>> f5bd81462727dd54f2ab2a0e49a690edec7ebe49
}

function onClick() {
    console.log("clicked!");
<<<<<<< HEAD
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


=======
    var newTask = new Task({content:input.value,done:false});
    element.appendChild(newTask.render());
>>>>>>> f5bd81462727dd54f2ab2a0e49a690edec7ebe49
}

window.addEventListener("DOMContentLoaded", runOnLoad);
