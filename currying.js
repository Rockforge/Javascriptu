// let dragon = (name, size, element) => {
//     return name + ' is a ' + size + ' dragon that breathes ' + element + '!';
// };

// console.log(dragon('drogo', 'large', 'fire'));

// You sprinkle it with thingies
// let drag = 
//     name => 
//         size => 
//             element => 
//                 name + ' is a ' + size + ' dragon that breathes ' + element + '!';

// console.log(drag('tera')('medium')('earth'))


let dragons = [
    {name:'drogo', element: 'fire'},
    {name:'darayon', element: 'lightning'},
    {name:'doomer', element: 'timewarp'},
    {name:'deathwing', element: 'water'},
    {name:'kalazar', element: 'lightning'},
];

let hasElement = (obj, element) => obj.element === element;
let lightningDragons = dragons.filter(x => hasElement(x, 'lightning'));

console.log(lightningDragons);