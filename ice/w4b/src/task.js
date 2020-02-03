class Task {
  constructor(props) {
    this.props = props;
  }

  onClick() {
    console.log("Clicked");
    //let style = (document.getElementById("doneBTN").style.color = blue);
  }

  render() {
    return `<div>
            <p>${this.props.content}<p>
            ${this.props.done}
        </div>`;
  }
}

const addTask = () => {
  let text = document.getElementById("addTask").nodeValue;
  const newTask = new Task(text);
  return newTask;
};
