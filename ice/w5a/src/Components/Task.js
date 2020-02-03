class Task {
    constructor(props) {
      this.props = props;
      this.element = document.createElement("div");
      let checkbox = document.createElement("INPUT");
      checkbox.type = "checkbox";
      checkbox.addEventListener("change", this.inputChange);
      parentTask.appendChild(checkbox)
      let taskText  = document.createElement("span");
      taskText.innerHTML = props.content;
      parentTask.appendChild(taskText);
    }

    inputChanged(){
      console.log(this.element.innerHTML)
    }

    render() {
      return this.element;
    }
  }
  
  export default Task;
  