class Adder {
  constructor(a, b) {
    this.a = a;
    this.b = b;
    this.sum = function() {
      let z = a + b;
      if (a && b) {
        return `${z}`;
      } else {
        return `null`;
      }
    };
  }

  render() {
    return `<p>The sum of ${this.a} and ${this.b} is ${this.sum()}</p>`;
  }
}

module.exports = Adder;
