const people = [
    {name: 'bob', age: 20, position: 'developer'},
    {name: 'peter', age: 25, position: 'designer'},
    {name: 'suzy', age: 30, position: 'the boss'},
    {name: 'ana', age: 35, position: 'the boss'},
];

const youngPeople = people.filter(function (person) {
    return person.age <= 25;
});

const developers = people.filter(function (person) {
    return person.position === 'developer';
});

console.log(developers);
console.log(youngPeople)

