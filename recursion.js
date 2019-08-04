function factorial(n) {
    if(n == 1) {
        return 1;
    } else {
        return n * factorial(n-1);
    }
}

// console.log(factorial(5));


function countdown(n) {
    // This is the base case
    if(n === 0) {
        return;
    } else {
        // This is the recursive case
        console.log(n);
        return countdown(n-1);
    }
}

// countdown(10);

let categories = [
    { id: 'animals', 'parent': null},
    { id: 'mammals', 'parent': 'animals'},

    { id: 'cat', 'parent': 'mammals'},
    { id: 'dog', 'parent': 'mammals'},

    { id: 'drogo', 'parent': 'dog'},
    { id: 'dexter', 'parent': 'dog'},

    { id: 'aloha', 'parent': 'cat'},
    { id: 'kiwi', 'parent': 'cat'},
];




function makeTree(categories, parent) {
    let node = {};

    categories
        .filter(c => c.parent === parent)
        .forEach(c => node[c.id] = makeTree(categories, c.id))

    return node;
}

console.log( JSON.stringify( makeTree(categories, null), null, 2) );
