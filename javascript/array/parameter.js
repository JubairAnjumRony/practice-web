// function checkParameter(param) {
//     if (param === undefined) {
//         console.log('Parameter is undefined');
//     } else {
//         console.log('Parameter is defined');
//     }
// }

// checkParameter();        // "Parameter is undefined"
// checkParameter('Hello');


function checkParameter(param) {
    if (typeof param === 'undefined') {
        console.log('Parameter is undefined');
    } else {
        console.log('Parameter is defined');
    }
}

checkParameter();        // "Parameter is undefined"
checkParameter('Hello'); // "Parameter is defined"
