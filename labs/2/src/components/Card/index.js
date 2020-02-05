import card from "./index.css";

let div = document.createElement("div");

class Card {
  constructor(props) {
    this.props = props;
    this.div = div;
    this.div.classList.add("card");
    this.div.innerHTML = "";
  }

  flip() {
    return this.props.flip
      ? (this.div.innerHTML = this.props.q)
      : (this.div.innerHTML = this.props.a);
  }

  render() {
    return `${this.div.innerHTML(this.props.flip())}`;
  }
}

export default Card;
