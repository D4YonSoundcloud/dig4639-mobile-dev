import Card from "./components/Card/index.js";

let card = new Card({
  q: "this is a question",
  a: "this is an answer",
  flip: true
});

card.addEventListener("click", () => {
    card.flip ? (card.flip = false) : (card.flip = true);
    return `${card.render()}`;
  });

document.body.appendChild(card.render());

