import Card from "./components/Card/index.js";

function runOnLoad() {
let card = new Card({
  q: "this is a question",
  a: "this is an answer",
  flip: true
});

document.body.appendChild(card.render());
}

window.addEventListener("DOMContentLoaded", runOnLoad);

