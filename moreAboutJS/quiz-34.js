// try {
//     console.log("Start");
//     throw new Error("Error occurred");
//    } catch (err) {
//     console.log(err.message);
//    } finally {
//     console.log("End");
//    }

let message = 'Hello!'; 
setTimeout(() => {
 message = 'Goodbye!'; 
}, 0); 
console.log(message);

console.log("A");
Promise.resolve().then(() => console.log("B"));
setTimeout(() => console.log("C"), 0);
console.log("D");

async function myFunction() {
    return "Hello";
   }
   myFunction().then(console.log);
   let x = 1;
let intervalId = setInterval(() => {
 console.log(x++);
 if (x > 3) clearInterval(intervalId);
}, 1000);
