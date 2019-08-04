// functions are not just functions
// They are also closures
let me = 'Bruce Wayne';

// this has access to the outer variable scope
function greetMe() {
    // me => Assiged outside of the function scope
    console.log('Hello, ' + me + '!');
}

me = 'Batman';
greetMe();


// function sendRequest() {
//     var requestID = '123';
//     $.ajax({
//         url: '/myurl',
//         success: function(response) {
//             alert('Hello World');
//         }
//     })
// }