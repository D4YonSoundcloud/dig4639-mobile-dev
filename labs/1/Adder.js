class Adder {
  constructor(props) {
    this.props = props;
  }

    sum() {
      let z = this.props.a + this.props.b;
      if (this.props.a && this.props.b) {
        return `${z}`;
      } else {
        return `null`;
      }
    
    };

  render() {
    return `<p>The sum of ${this.props.a} and ${this.props.b} is ${this.sum()}</p>`;
  }
}

module.exports = Adder;
