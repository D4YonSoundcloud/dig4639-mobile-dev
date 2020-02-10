import Card from "./components/Card/index.js";

function runOnLoad() {
let card1 = new Card({
  q: "this is a question",
  a: "this is an answer",
  flip: true
});
let card2 = new Card({
  q: "What are the JavaScript Data Types?",
  a: "Number, String, Boolean, Object, Undefined",
  flip: true
});
let card3 = new Card({
  q: "What is 'this' keyword in JavaScript?",
  a: "'This' keyword refers to the object from where it was called.",
  flip: true
});
let card4 = new Card({
  q: "What is === operator?",
  a: "=== is called as strict equality operator which returns true when the two operands are having the same value without any type conversion.",
  flip: true
});
let card5 = new Card({
  q: "What are all the looping structures in JavaScript?",
  a: "For, While, Do-While",
  flip: true
});

document.body.appendChild(card1.render());
document.body.appendChild(card2.render());
document.body.appendChild(card3.render());
document.body.appendChild(card4.render());
document.body.appendChild(card5.render());
}

window.addEventListener("DOMContentLoaded", runOnLoad);

