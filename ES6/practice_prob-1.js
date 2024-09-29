const multiply = (a,b,c) =>a*b*c;

console.log(multiply(2,3,5));


const templateLiterals =`
             I am a web developer.
             I love to code.
             I love to eat biryani.
`
console.log(templateLiterals);

// Default Parameters

 const d = (a,b=4) =>{
    return a+b;
 }

 console.log(d(4));