// Advance reducing my friend
var fs = require('fs');

// This is an example of good functional code
var output = fs.readFileSync('data.txt', 'utf8')
    .trim()
    .split('\n')
    .map(line => line.split(' '))
    .reduce((customers, line) => {
        customers[line[0]] = customers[line[0]] || [];
        customers[line[0]].push({
            name: line[1],
            price: line[2],
            quantity: line[3],
        });
        return customers;
    }, {});

// Convert this into a JSON
// console.log(JSON.stringify(output, null, 2));


