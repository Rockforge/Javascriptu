// Declare animals
var animals = [
    {name: 'Fluffykins', species: 'cat'},
    {name: 'Testing',    species: 'dog'},
    {name: 'Doggo',      species: 'dragon'},
    {name: 'Drogo',      species: 'dog'},
    {name: 'Avengers',   species: 'rabbit'},
    {name: 'Bingla',     species: 'dog'},
    {name: 'Sharon',     species: 'dog'},
    {name: 'Catty',      species: 'cat'},
    {name: 'Hamilton',   species: 'fish'}
];

// Function being called by the filter method
var isDog =  function(animal) {
    return animal.species === 'dog';
}

// This is called a *higher order* function
// Because it's a function that accepts another function
var dogs = animals.filter(isDog);

// I guess reject doesn't work here anymore
// var otherAnimals = animals.reject(isDog);

var names = [];
// Mapping this
// names = animals.map(function(x) {
//     return x.name + ' is a ' + x.species;
// });

// Always shorten code they say... it will be fun they said
// Arrow functions my friend
names = animals.map(x => {
    return x.name + ' is a ' + x.species;
});

// console.log(names);


// Playing with reduce
// Is the best thing in the world
// We've learned map, filter, and reject

// List transformations
// Map, Filter, and Reject


// Reduce is the multi-tool
var orders = [
    {amount: 250},
    {amount: 400},
    {amount: 100},
    {amount: 325},
]

// Running the powerful reduce function
var totalAmount = orders.reduce((sum, order) => {
    console.log('Hello', sum, order);
    return sum + order.amount;
}, 0);

console.log(totalAmount);

