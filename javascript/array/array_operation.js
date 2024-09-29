// function getMenu() {
//     console.log("Burger, Pizza, Pasta");
//    }


// getMenu();

// function sayHello(name) {
//     console.log("Hello, " + name + "!");
//     // No return statement
// }

// let result = sayHello("Alice");

// console.log(result); // Outputs: undefined

for (var i = 0; i < 5; i++) {
    setTimeout(function () {
    console.log(i);
 }, 100);
}

let a = 42;    // number
let b = "hello";  // string

[a, b] = [b, a];

console.log(a); // "hello"
console.log(b);