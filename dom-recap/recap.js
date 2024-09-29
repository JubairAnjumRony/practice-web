//  how to use js with htmal and css


// const num= 23;
// if(typeof num === 'number'){
//     console.log("value is a number");
// }
// else {
//     console.log("value is not a number");
// }

const number =[1,3,354,555];
const student = {
    name:"sakib",
    roll:2018,
    address:"noakhali"
};

console.log(typeof(number));
console.log(typeof(student));
console.log(Array.isArray(number));

// isNan
// checks whether it is string or anything without number 

// default parameter
function sum(num1=99,num2=98){
    const result = num1+num2;
    console.log(num1,num2,result);
    

}

const s =sum(44);

const obj = {foo:1};
obj.bar =2;
 obj.foo;
console.log(obj);
const name ="hero";
const greetings =`welcome home!${name}`;
console.log(greetings);
let a=12; b=3;
[a,b] = [b,a];
console.log(a,b);