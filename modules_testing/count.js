let counter = function(arr) {
    return `There are ${arr.length} in the array`;
};

let adder = function(a, b) {
    return `The sum of thingies are ${a + b}`;
}

// Export these modules
// module.exports = {
//     counter: counter,
//     addon: adder,
// };
export default counter;
