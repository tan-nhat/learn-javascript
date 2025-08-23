const people = [
  { name: "bob", age: 20, position: "developer", id: 1, salary: 200 },
  { name: "perter", age: 25, position: "designer", id: 2, salary: 300 },
  { name: "susy", age: 30, position: "the boss", id: 3, salary: 500 },
  { name: "anna", age: 25, position: "the boss", id: 4, salary: 500 },
];

const total = people.reduce(function (acc, currItem) {
  console.log(`total ${acc}`);
  console.log(`current money: ${currItem.salary}`);
  acc += currItem.salary;
  return acc;
}, 500);

console.log(total);