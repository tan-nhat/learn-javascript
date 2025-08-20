const people = [
    {id: 1,name: 'bob', age: 20, position: 'developer'},
    {id: 2,name: 'peter', age: 25, position: 'designer'},
    {id: 3,name: 'suzy', age: 30, position: 'the boss'},
    {id: 4,name: 'ana', age: 35, position: 'the boss'},
];

const names = ['bob', 'peter', 'susy'];
console.log(names.find(function(name) {
    return name === 'a';
}));

const person = people.find(function(person) {
    return person.id === 3;
});
console.log(person.name);
console.log(person);

const person2 = people.filter(function(person) {
    return person.id === 3;
});
console.log(person2[0].name);
