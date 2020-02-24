const myArray = [2, 5, 8, 20, 18];

let sum = 0;
for (const item of myArray) {
  sum = sum + item;
}

for (let item = 0; item < myArray.length; item++) {
  sum = sum + myArray[item];
}
for (let item = 0; item < myArray.length; item++) {
  myArray[item] = myArray[item] / 2;
}

const newArray = [];
for (let item = 0; item < myArray.length; item++) {
  newArray.push(myArray[item] / 2);
}
console.log(myArray);
console.log(newArray);

addTwo = (value, index, array) => {
  return value + 2;
};
const resultArray = myArray.map(addTwo);
console.log(resultArray);

const differentArray = myArray.map(value => value + 2);
console.log(differentArray);

printItems = arrayInput => {
  const htmlArray = arrayInput.map(value => `<p>${value}</p>`);
  console.log(htmlArray);
  return htmlArray;
};
printItems(myArray);

compareNumbers = (a, b) => {
  return a - b;
};

printItems(myArray.sort(compareNumbers));

let todoList = [
  {
    content: "Task 1",
    priority: 2,
    completed: true
  },
  {
    content: "Task 2",
    priority: 1,
    completed: false
  },
  {
    content: "Task 3",
    priority: 3,
    completed: true
  }
];

printTodo = arrayInput => {
  const htmlArray = arrayInput.map(value => {
    `<p ${value.complete ? 'class=done' : ''}> ${value.priority} : ${
      value.content
    } </p>`;
  });
  return htmlArray;
};

console.log(printTodo(todoList).join("\n"));

evalItem = item => {
  return !item.completed;
};
console.log(printTodo(todoList.filter(evalItem)).join("\n"));

console.log(printTodo(todoList.filter(item => !item.completed)).join("\n"));

let filteredArray = [];
for (const item of todoList) {
  if (!item.completed) {
    filteredArray.push(item);
  }
}

console.log(printTodo(filteredArray).join("\n"));
