// 'use strict';
// var i = 99999;


// // Immediately invoked funtion
// // (function() {
// //     for (i = 0; i < 10; i++) {
// //         console.log(i);
// //     }
// // })();

// for(let i = 0; i < 10; i++) {
//     console.log(i);
// }

// console.log(i);

const x = {
    y: 5
};

x.y = 78;

console.log(x);

let z = 2;
let y = z;
console.log('Y variable:', y);

z = 3;
console.log('Y variable:', y);
// Minimize mutable state