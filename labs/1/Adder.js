class Adder {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  add() {
    return this.a+this.b;
  }

  render() {
    return `<p> The sum of ${this.a} and ${this.b} is </p>`;
  }
}

module.exports = Adder;

Adder.sum = function(){
    return this.a + this.b;
}