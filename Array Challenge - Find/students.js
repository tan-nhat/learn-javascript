const specificId = students.find(function(banana) {
    return banana.id === 1;
});

const fruits = ['banana', 'orange'];
const random = fruits.find(function(fruit) {
    return fruit === 'orange'
})

console.log(random);
console.log(specificId);
