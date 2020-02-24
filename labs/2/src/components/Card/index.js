import "./index.css";

let div = document.createElement("div");

class Card {
  constructor(props) {
    this.props = props;
    this.div = div;
    this.div.className = "card";
    this.div.addEventListener("click", () => {
      this.props.flip = !this.props.flip;
      return this.props.flip
        ? (this.div.innerHTML = this.props.q)
        : (this.div.innerHTML = this.props.a);
    });
  }

  render() {
    return `${this.div.innerHTML}`;
  }
}

export default Card;
